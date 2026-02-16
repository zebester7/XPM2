
import os
import json
import uuid
import time
from fastapi import FastAPI, Request, Form, Depends, HTTPException, status, Response, Body
from fastapi.responses import HTMLResponse, RedirectResponse, FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from typing import List, Optional, Dict, Any

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
templates = Jinja2Templates(directory="templates")

# Mount static files for the SPA (dist folder for built React app)
if os.path.exists("dist"):
    app.mount("/assets", StaticFiles(directory="dist/assets", html=False), name="assets")
    app.mount("/public", StaticFiles(directory="public", html=False), name="public")

# --- Full Subject Catalog ---
SUBJECTS = [
    # O Levels
    {"id": "math-0580", "name": "Mathematics", "level": "O Level", "code": "0580", "desc": "Numerical proficiency and logic.", "topics": 9},
    {"id": "chem-0620", "name": "Chemistry", "level": "O Level", "code": "0620", "desc": "Understanding the composition and properties of matter.", "topics": 12},
    {"id": "bio-0610", "name": "Biology", "level": "O Level", "code": "0610", "desc": "The study of living organisms and vital life processes.", "topics": 21},
    {"id": "phys-0625", "name": "Physics", "level": "O Level", "code": "0625", "desc": "Laws of motion and energy.", "topics": 6},
    {"id": "cs-0478", "name": "Computer Science", "level": "O Level", "code": "0478", "desc": "Algorithms and architecture.", "topics": 10},
]

# --- Mock Database Logic ---
DB_FILE = "db.json"

def load_db():
    if not os.path.exists(DB_FILE):
        initial_data = {
            "users": [{
                "id": "super-admin-1", 
                "name": "Zubair Ahmad", 
                "email": "zubairahmadisb7p2@gmail.com", 
                "password": "12345678", 
                "role": "admin", 
                "enrolled_subjects": [], 
                "completed_topics": []
            }],
            "teachers": [
                {"id": "t1", "name": "Sir Zubair", "subjects": ["Physics", "Mathematics"], "whatsapp": "923009508592", "registrationStatus": "active", "isVerified": True}
            ],
            "questions": [],
            "reviews": [{"id": "r1", "userName": "Zayan Ahmed", "rating": 5, "comment": "Best resource for O Levels!", "timestamp": time.time()}]
        }
        with open(DB_FILE, "w") as f:
            json.dump(initial_data, f)
    with open(DB_FILE, "r") as f:
        return json.load(f)

def save_db(data):
    with open(DB_FILE, "w") as f:
        json.dump(data, f, indent=2)

def get_current_user(request: Request):
    user_id = request.cookies.get("session_id")
    if not user_id: return None
    db_data = load_db()
    return next((u for u in db_data["users"] if u["id"] == user_id), None)

# --- Routes ---

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    user = get_current_user(request)
    db_data = load_db()
    return templates.TemplateResponse("home.html", {"request": request, "user": user, "reviews": db_data["reviews"]})

@app.get("/login", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse("auth.html", {"request": request, "mode": "login"})

@app.post("/login")
async def login(email: str = Form(...), password: str = Form(...)):
    db_data = load_db()
    # Check specifically for Zubair's admin account
    if email == "zubairahmadisb7p2@gmail.com" and password == "12345678":
        user = next((u for u in db_data["users"] if u["email"] == email), None)
        if not user:
            # Fallback if admin was deleted from JSON but requested again
            user = {"id": "super-admin-1", "name": "Zubair Ahmad", "email": email, "password": password, "role": "admin", "enrolled_subjects": [], "completed_topics": []}
            db_data["users"].append(user)
            save_db(db_data)
        response = RedirectResponse("/dashboard", status_code=status.HTTP_303_SEE_OTHER)
        response.set_cookie("session_id", user["id"])
        return response
        
    user = next((u for u in db_data["users"] if u["email"] == email and u["password"] == password), None)
    if not user: return RedirectResponse("/login?error=1")
    response = RedirectResponse("/dashboard", status_code=status.HTTP_303_SEE_OTHER)
    response.set_cookie("session_id", user["id"])
    return response

@app.get("/admin", response_class=HTMLResponse)
async def admin_dashboard(request: Request):
    user = get_current_user(request)
    if not user or user["role"] != "admin": return RedirectResponse("/")
    db_data = load_db()
    students = [u for u in db_data["users"] if u["role"] == "student"]
    pending_questions = [q for q in db_data["questions"] if not q.get("reply")]
    return templates.TemplateResponse("admin.html", {
        "request": request, 
        "user": user, 
        "students": students, 
        "questions": db_data["questions"],
        "pending_count": len(pending_questions)
    })

# Other routes (subjects, enroll, etc) remain similar...


# --- Teacher API (simple CRUD for frontend sync) ---
@app.get('/api/teachers')
async def api_get_teachers(response: Response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    db_data = load_db()
    return db_data.get('teachers', [])


@app.post('/api/teachers')
async def api_create_teacher(teacher: Dict[str, Any] = Body(...), response: Response = None):
    if response is None:
        response = Response()
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    db_data = load_db()
    teachers = db_data.setdefault('teachers', [])
    # Check if teacher with same id exists, update instead of create duplicate
    existing_idx = next((i for i, t in enumerate(teachers) if t.get('id') == teacher.get('id')), None)
    if existing_idx is not None:
        teachers[existing_idx] = teacher
    else:
        teachers.append(teacher)
    save_db(db_data)
    return teacher


@app.put('/api/teachers/{tid}')
async def api_update_teacher(tid: str, teacher: Dict[str, Any] = Body(...), response: Response = None):
    if response is None:
        response = Response()
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    db_data = load_db()
    teachers = db_data.setdefault('teachers', [])
    for i, t in enumerate(teachers):
        if t.get('id') == tid:
            teachers[i] = teacher
            save_db(db_data)
            return teacher
    raise HTTPException(status_code=404, detail='Teacher not found')


@app.delete('/api/teachers/{tid}')
async def api_delete_teacher(tid: str, response: Response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    db_data = load_db()
    teachers = db_data.get('teachers', [])
    new = [t for t in teachers if t.get('id') != tid]
    db_data['teachers'] = new
    save_db(db_data)
    return {'status': 'ok'}


# --- Simple Users API (for SPA sync) ---
@app.get('/api/users')
async def api_get_users(response: Response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    db_data = load_db()
    return db_data.get('users', [])


@app.post('/api/users')
async def api_create_or_update_user(user: Dict[str, Any] = Body(...), response: Response = None):
    if response is None:
        response = Response()
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    db_data = load_db()
    users = db_data.setdefault('users', [])
    # find existing by id or email
    idx = next((i for i,u in enumerate(users) if (u.get('id') and user.get('id') and u.get('id') == user.get('id')) or (u.get('email') and user.get('email') and u.get('email') == user.get('email'))), None)
    if idx is None:
        users.append(user)
    else:
        users[idx] = user
    save_db(db_data)
    return user


@app.put('/api/users/{uid}')
async def api_update_user(uid: str, user: Dict[str, Any] = Body(...), response: Response = None):
    if response is None:
        response = Response()
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    db_data = load_db()
    users = db_data.setdefault('users', [])
    for i, u in enumerate(users):
        if u.get('id') == uid or (user.get('email') and u.get('email') == user.get('email')):
            users[i] = user
            save_db(db_data)
            return user
    raise HTTPException(status_code=404, detail='User not found')

# --- Sitemap Route for SEO ---
@app.get("/sitemap.xml", response_class=FileResponse)
async def get_sitemap():
    """Serve sitemap.xml from public folder for Google indexing"""
    sitemap_path = Path("sitemap.xml")
    if sitemap_path.exists():
        return FileResponse(sitemap_path, media_type="application/xml")
    raise HTTPException(status_code=404, detail="Sitemap not found")

@app.get("/robots.txt", response_class=FileResponse)
async def get_robots():
    """Serve robots.txt for search engine crawlers"""
    robots_path = Path("public/robots.txt")
    if robots_path.exists():
        return FileResponse(robots_path, media_type="text/plain")
    raise HTTPException(status_code=404, detail="Robots file not found")

# --- SPA Catch-all Route (for BrowserRouter) ---
# Serve index.html for all non-API, non-static routes
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    # Skip API routes and known file types
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="API endpoint not found")
    
    # Check if it's a static file request
    if any(full_path.endswith(ext) for ext in ['.js', '.css', '.json', '.webmanifest', '.xml', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico']):
        static_path = Path(f"dist/{full_path}")
        if static_path.exists():
            return FileResponse(static_path)
        raise HTTPException(status_code=404, detail="File not found")
    
    # Serve index.html for all other routes (SPA routing)
    index_path = Path("dist/index.html")
    if index_path.exists():
        return FileResponse(index_path, media_type="text/html")
    
    # Fallback if dist is not available
    raise HTTPException(status_code=404, detail="Frontend app not built. Run: npm run build")