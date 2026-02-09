
import os
import json
import uuid
import time
from fastapi import FastAPI, Request, Form, Depends, HTTPException, status, Response
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from typing import List, Optional

app = FastAPI()
templates = Jinja2Templates(directory="templates")

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
            "questions": [],
            "reviews": [{"id": "r1", "userName": "Zayan Ahmed", "rating": 5, "comment": "Best resource for O Levels!", "timestamp": time.time()}],
            "teachers": [
                {"id": "t1", "name": "Sir Zubair", "subjects": ["Physics", "Mathematics"], "whatsapp": "923009508592", "registrationStatus": "active", "isVerified": True, "attendance": [], "activeTenures": []}
            ]
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

# --- Teacher API (admin-protected) ---
@app.get("/api/teachers")
async def api_get_teachers():
    db_data = load_db()
    return db_data.get("teachers", [])

@app.post("/api/teachers")
async def api_add_teacher(request: Request):
    user = get_current_user(request)
    if not user or user.get("role") != "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    payload = await request.json()
    db_data = load_db()
    teachers = db_data.get("teachers", [])
    teachers.append(payload)
    db_data["teachers"] = teachers
    save_db(db_data)
    return {"success": True, "teachers": teachers}

@app.put("/api/teachers/{teacher_id}")
async def api_update_teacher(teacher_id: str, request: Request):
    user = get_current_user(request)
    if not user or user.get("role") != "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    payload = await request.json()
    db_data = load_db()
    teachers = db_data.get("teachers", [])
    updated = False
    for i, t in enumerate(teachers):
        if t.get("id") == teacher_id:
            teachers[i] = {**t, **payload}
            updated = True
            break
    if not updated:
        raise HTTPException(status_code=404, detail="Teacher not found")
    db_data["teachers"] = teachers
    save_db(db_data)
    return {"success": True, "teacher": [t for t in teachers if t.get("id") == teacher_id][0]}

@app.delete("/api/teachers/{teacher_id}")
async def api_delete_teacher(teacher_id: str, request: Request):
    user = get_current_user(request)
    if not user or user.get("role") != "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    db_data = load_db()
    teachers = db_data.get("teachers", [])
    new_teachers = [t for t in teachers if t.get("id") != teacher_id]
    if len(new_teachers) == len(teachers):
        raise HTTPException(status_code=404, detail="Teacher not found")
    db_data["teachers"] = new_teachers
    save_db(db_data)
    return {"success": True, "teachers": new_teachers}
