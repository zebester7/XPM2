
import os
import json
import uuid
import time
from pathlib import Path
from typing import List, Optional, Dict, Any

from fastapi import FastAPI, Request, Form, Depends, HTTPException, status, Response, Body, UploadFile, File
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

# Import our custom modules
from api.db_layer import (
    read_db, write_db, get_collection, save_collection, 
    get_item, save_item, delete_item, find_user_by_email, find_user_by_id, init_db
)
from api.auth import hash_password, verify_password, create_access_token, decode_token

app = FastAPI(title="Academy API")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
Path("public").mkdir(exist_ok=True)
Path("public/uploads").mkdir(exist_ok=True)

if os.path.exists("dist"):
    app.mount("/assets", StaticFiles(directory="dist/assets", html=False), name="assets")

app.mount("/public", StaticFiles(directory="public", html=False), name="public")

# Initialize database
init_db()


# ============================================================================
# AUTHENTICATION ROUTES
# ============================================================================

@app.post("/api/auth/login")
async def login(request: Request):
    """Authenticate a user and return their data."""
    try:
        data = await request.json()
        email = data.get("email", "").strip()
        password = data.get("password", "")
        
        if not email or not password:
            raise HTTPException(status_code=400, detail="Email and password required")
        
        # Find user by email
        user = find_user_by_email(email)
        
        if not user:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        # Verify password
        if not verify_password(password, user.get("password_hash", "")):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        # Remove sensitive data
        user_safe = {k: v for k, v in user.items() if k != "password_hash"}
        
        # Create token
        token = create_access_token({"sub": user["id"]})
        
        return {
            "user": user_safe,
            "token": token
        }
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")


@app.post("/api/auth/signup")
async def signup(request: Request):
    """Create a new user account."""
    try:
        data = await request.json()
        name = data.get("name", "").strip()
        email = data.get("email", "").strip().lower()
        password = data.get("password", "")
        phone = data.get("phoneNumber", "").strip()
        
        if not all([name, email, password]):
            raise HTTPException(status_code=400, detail="Name, email, and password required")
        
        # Check if email exists
        if find_user_by_email(email):
            raise HTTPException(status_code=409, detail="Email already registered")
        
        # Create new user
        new_user = {
            "id": f"user-{uuid.uuid4().hex[:8]}",
            "name": name,
            "email": email,
            "password_hash": hash_password(password),
            "role": "student",
            "phoneNumber": phone,
            "enrolledSubjects": [],
            "completedTopics": [],
            "registeredAt": int(time.time() * 1000),
            "subscriptionStatus": "none"
        }
        
        save_item("users", new_user)
        
        # Remove sensitive data
        user_safe = {k: v for k, v in new_user.items() if k != "password_hash"}
        token = create_access_token({"sub": new_user["id"]})
        
        return {
            "user": user_safe,
            "token": token
        }
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")


# ============================================================================
# USER ROUTES
# ============================================================================

@app.get("/api/users")
async def get_users():
    """Get all users (admin only - remove passwords)."""
    users = get_collection("users")
    # Remove password hashes from response
    return [
        {k: v for k, v in u.items() if k != "password_hash"}
        for u in users
    ]


@app.get("/api/users/{user_id}")
async def get_user(user_id: str):
    """Get a specific user."""
    user = find_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Remove password hash
    return {k: v for k, v in user.items() if k != "password_hash"}


@app.post("/api/users")
async def create_user(data: Dict[str, Any] = Body(...)):
    """Create a new user."""
    required = ["name", "email", "password"]
    if not all(k in data for k in required):
        raise HTTPException(status_code=400, detail="Missing required fields")
    
    if find_user_by_email(data["email"]):
        raise HTTPException(status_code=409, detail="Email already exists")
    
    new_user = {
        "id": f"user-{uuid.uuid4().hex[:8]}",
        "name": data["name"],
        "email": data["email"].lower(),
        "password_hash": hash_password(data["password"]),
        "role": data.get("role", "student"),
        "phoneNumber": data.get("phoneNumber", ""),
        "enrolledSubjects": data.get("enrolledSubjects", []),
        "completedTopics": data.get("completedTopics", []),
        "registeredAt": int(time.time() * 1000),
        "subscriptionStatus": data.get("subscriptionStatus", "none")
    }
    
    save_item("users", new_user)
    return {k: v for k, v in new_user.items() if k != "password_hash"}


@app.put("/api/users/{user_id}")
async def update_user(user_id: str, data: Dict[str, Any] = Body(...)):
    """Update an existing user."""
    user = find_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Update allowed fields (don't allow direct password update via this endpoint)
    allowed_fields = ["name", "phoneNumber", "enrolledSubjects", "completedTopics", "subscriptionStatus"]
    
    for field in allowed_fields:
        if field in data:
            user[field] = data[field]
    
    save_item("users", user)
    return {k: v for k, v in user.items() if k != "password_hash"}


@app.delete("/api/users/{user_id}")
async def delete_user(user_id: str):
    """Delete a user."""
    delete_item("users", user_id)
    return {"status": "deleted"}


# ============================================================================
# TEACHER ROUTES
# ============================================================================

@app.get("/api/teachers")
async def get_teachers(response: Response):
    """Get all teachers."""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    teachers = get_collection("teachers")
    return teachers


@app.post("/api/teachers")
async def create_teacher(teacher: Dict[str, Any] = Body(...)):
    """Create a new teacher."""
    teacher["id"] = teacher.get("id", f"teacher-{uuid.uuid4().hex[:8]}")
    save_item("teachers", teacher)
    return teacher


@app.put("/api/teachers/{teacher_id}")
async def update_teacher(teacher_id: str, teacher: Dict[str, Any] = Body(...)):
    """Update an existing teacher."""
    existing = get_item("teachers", teacher_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Teacher not found")
    
    teacher["id"] = teacher_id
    save_item("teachers", teacher)
    return teacher


@app.delete("/api/teachers/{teacher_id}")
async def delete_teacher(teacher_id: str):
    """Delete a teacher."""
    delete_item("teachers", teacher_id)
    return {"status": "deleted"}


# ============================================================================
# REVIEWS ROUTES
# ============================================================================

@app.get("/api/reviews")
async def get_reviews():
    """Get all reviews."""
    return get_collection("reviews")


@app.post("/api/reviews")
async def create_review(review: Dict[str, Any] = Body(...)):
    """Create a new review."""
    review["id"] = review.get("id", f"review-{uuid.uuid4().hex[:8]}")
    review["timestamp"] = review.get("timestamp", int(time.time() * 1000))
    save_item("reviews", review)
    return review


@app.delete("/api/reviews/{review_id}")
async def delete_review(review_id: str):
    """Delete a review."""
    delete_item("reviews", review_id)
    return {"status": "deleted"}


# ============================================================================
# QUESTIONS ROUTES
# ============================================================================

@app.get("/api/questions")
async def get_questions():
    """Get all questions."""
    return get_collection("questions")


@app.post("/api/questions")
async def create_question(question: Dict[str, Any] = Body(...)):
    """Create a new question."""
    question["id"] = question.get("id", f"question-{uuid.uuid4().hex[:8]}")
    question["timestamp"] = question.get("timestamp", int(time.time() * 1000))
    save_item("questions", question)
    return question


@app.put("/api/questions/{question_id}")
async def update_question(question_id: str, question: Dict[str, Any] = Body(...)):
    """Update a question (e.g., add reply)."""
    existing = get_item("questions", question_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Question not found")
    
    question["id"] = question_id
    save_item("questions", question)
    return question


@app.delete("/api/questions/{question_id}")
async def delete_question(question_id: str):
    """Delete a question."""
    delete_item("questions", question_id)
    return {"status": "deleted"}


# ============================================================================
# PAST PAPERS ROUTES
# ============================================================================

@app.get("/api/past-papers")
async def get_past_papers():
    """Get all past papers."""
    return get_collection("pastpapers")


@app.post("/api/past-papers")
async def create_past_paper(paper: Dict[str, Any] = Body(...)):
    """Create a new past paper entry."""
    paper["id"] = paper.get("id", f"paper-{uuid.uuid4().hex[:8]}")
    save_item("pastpapers", paper)
    return paper


@app.put("/api/past-papers/{paper_id}")
async def update_past_paper(paper_id: str, paper: Dict[str, Any] = Body(...)):
    """Update a past paper."""
    existing = get_item("pastpapers", paper_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Past paper not found")
    
    paper["id"] = paper_id
    save_item("pastpapers", paper)
    return paper


@app.delete("/api/past-papers/{paper_id}")
async def delete_past_paper(paper_id: str):
    """Delete a past paper."""
    delete_item("pastpapers", paper_id)
    return {"status": "deleted"}


# ============================================================================
# BLOGS ROUTES
# ============================================================================

@app.get("/api/blogs")
async def get_blogs():
    """Get all blog posts."""
    return get_collection("blogs")


@app.post("/api/blogs")
async def create_blog(blog: Dict[str, Any] = Body(...)):
    """Create a new blog post."""
    blog["id"] = blog.get("id", f"blog-{uuid.uuid4().hex[:8]}")
    blog["date"] = blog.get("date", int(time.time() * 1000))
    save_item("blogs", blog)
    return blog


@app.put("/api/blogs/{blog_id}")
async def update_blog(blog_id: str, blog: Dict[str, Any] = Body(...)):
    """Update a blog post."""
    existing = get_item("blogs", blog_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    blog["id"] = blog_id
    save_item("blogs", blog)
    return blog


@app.delete("/api/blogs/{blog_id}")
async def delete_blog(blog_id: str):
    """Delete a blog post."""
    delete_item("blogs", blog_id)
    return {"status": "deleted"}


# ============================================================================
# MATERIALS ROUTES
# ============================================================================

@app.get("/api/materials")
async def get_materials():
    """Get all learning materials."""
    return get_collection("materials")


@app.post("/api/materials")
async def create_material(material: Dict[str, Any] = Body(...)):
    """Create a new learning material."""
    material["id"] = material.get("id", f"material-{uuid.uuid4().hex[:8]}")
    material["createdAt"] = material.get("createdAt", int(time.time() * 1000))
    save_item("materials", material)
    return material


@app.put("/api/materials/{material_id}")
async def update_material(material_id: str, material: Dict[str, Any] = Body(...)):
    """Update a learning material."""
    existing = get_item("materials", material_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Material not found")
    
    material["id"] = material_id
    save_item("materials", material)
    return material


@app.delete("/api/materials/{material_id}")
async def delete_material(material_id: str):
    """Delete a learning material."""
    delete_item("materials", material_id)
    return {"status": "deleted"}


# ============================================================================
# SETTINGS ROUTES
# ============================================================================

@app.get("/api/settings")
async def get_settings():
    """Get app settings."""
    data = read_db()
    return data.get("settings", {"subscriptionFee": 1500, "originalPrice": 3999})


@app.put("/api/settings")
async def update_settings(settings: Dict[str, Any] = Body(...)):
    """Update app settings."""
    data = read_db()
    data["settings"] = settings
    write_db(data)
    return settings


# ============================================================================
# FILE UPLOAD ROUTES
# ============================================================================

@app.post("/api/upload-logo")
async def upload_logo(file: UploadFile = File(...)):
    """Upload a logo file."""
    try:
        if not file.content_type or not file.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail='File must be an image')
        
        uploads_dir = Path('public/uploads')
        uploads_dir.mkdir(parents=True, exist_ok=True)
        
        file_ext = Path(file.filename).suffix
        unique_filename = f"logo_{uuid.uuid4()}{file_ext}"
        file_path = uploads_dir / unique_filename
        
        contents = await file.read()
        with open(file_path, 'wb') as f:
            f.write(contents)
        
        return {
            'url': f'/public/uploads/{unique_filename}',
            'filename': unique_filename
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Upload failed: {str(e)}')


# ============================================================================
# SEO ROUTES
# ============================================================================

@app.get("/sitemap.xml")
async def get_sitemap():
    """Serve sitemap.xml for SEO."""
    sitemap_path = Path("sitemap.xml")
    if sitemap_path.exists():
        return FileResponse(sitemap_path, media_type="application/xml")
    raise HTTPException(status_code=404, detail="Sitemap not found")


@app.get("/robots.txt")
async def get_robots():
    """Serve robots.txt for search engine crawlers."""
    robots_path = Path("public/robots.txt")
    if robots_path.exists():
        return FileResponse(robots_path, media_type="text/plain")
    raise HTTPException(status_code=404, detail="Robots file not found")


# ============================================================================
# SPA CATCH-ALL ROUTE
# ============================================================================

@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    """Serve React SPA - catch all route for client-side routing."""
    
    # Skip API routes
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="API endpoint not found")
    
    # Serve static files
    static_extensions = ['.js', '.css', '.json', '.webmanifest', '.xml', '.png', '.jpg', 
                        '.jpeg', '.gif', '.svg', '.webp', '.ico', '.woff2', '.woff', '.ttf']
    if any(full_path.lower().endswith(ext) for ext in static_extensions):
        static_path = Path(f"dist/{full_path}")
        if static_path.exists():
            return FileResponse(static_path)
        raise HTTPException(status_code=404, detail="File not found")
    
    # Serve index.html for all other routes (SPA routing)
    index_path = Path("dist/index.html")
    if index_path.exists():
        return FileResponse(index_path, media_type="text/html")
    
    raise HTTPException(status_code=404, detail="Frontend not built. Run: npm run build")