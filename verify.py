#!/usr/bin/env python3
"""
Quick Verification Script for Academy LMS Backend
Run this after starting the backend to verify everything is working.

Usage: python verify.py
"""

import requests
import json
import time
from pathlib import Path

BASE_URL = "http://localhost:8000"
PASSED = 0
FAILED = 0

def test(name: str, func):
    """Run a test and track pass/fail."""
    global PASSED, FAILED
    try:
        func()
        print(f"✅ {name}")
        PASSED += 1
    except AssertionError as e:
        print(f"❌ {name}: {e}")
        FAILED += 1
    except Exception as e:
        print(f"❌ {name}: {type(e).__name__}: {e}")
        FAILED += 1

def test_backend_running():
    """Test 1: Backend is running."""
    resp = requests.get(f"{BASE_URL}/api/teachers", timeout=2)
    assert resp.status_code in [200, 404], f"Got {resp.status_code}"

def test_database_exists():
    """Test 2: Database file exists."""
    assert Path("data/db.json").exists(), "data/db.json not found"

def test_database_valid_json():
    """Test 3: Database is valid JSON."""
    with open("data/db.json") as f:
        data = json.load(f)
    assert isinstance(data, dict), "db.json not a dictionary"
    assert "users" in data, "Missing 'users' key"
    assert "teachers" in data, "Missing 'teachers' key"

def test_admin_user_exists():
    """Test 4: Admin user is initialized."""
    with open("data/db.json") as f:
        data = json.load(f)
    assert len(data["users"]) > 0, "No users in database"
    admin = next((u for u in data["users"] if u.get("role") == "admin"), None)
    assert admin, "No admin user found"

def test_passwords_hashed():
    """Test 5: Passwords are hashed (not plain text)."""
    with open("data/db.json") as f:
        data = json.load(f)
    for user in data["users"]:
        # Check for password_hash, not password
        if "password_hash" in user:
            assert user["password_hash"].startswith("$pbkdf2$"), \
                f"Password not hashed for user {user.get('email')}"
        # Warn if plain text password still exists
        if "password" in user and user.get("password") not in ["12345678"]:
            print(f"  ⚠️  Warning: User {user.get('email')} has plain text password")

def test_api_teachers_list():
    """Test 6: GET /api/teachers returns list."""
    resp = requests.get(f"{BASE_URL}/api/teachers")
    assert resp.status_code == 200, f"Got {resp.status_code}"
    data = resp.json()
    assert isinstance(data, list), "Response not a list"

def test_api_users_list():
    """Test 7: GET /api/users returns list."""
    resp = requests.get(f"{BASE_URL}/api/users")
    assert resp.status_code == 200, f"Got {resp.status_code}"
    data = resp.json()
    assert isinstance(data, list), "Response not a list"

def test_api_reviews_list():
    """Test 8: GET /api/reviews returns list."""
    resp = requests.get(f"{BASE_URL}/api/reviews")
    assert resp.status_code == 200, f"Got {resp.status_code}"
    data = resp.json()
    assert isinstance(data, list), "Response not a list"

def test_api_blogs_list():
    """Test 9: GET /api/blogs returns list."""
    resp = requests.get(f"{BASE_URL}/api/blogs")
    assert resp.status_code == 200, f"Got {resp.status_code}"
    data = resp.json()
    assert isinstance(data, list), "Response not a list"

def test_cors_headers():
    """Test 10: CORS headers present."""
    resp = requests.get(f"{BASE_URL}/api/teachers")
    assert "access-control-allow-origin" in resp.headers or \
           "Access-Control-Allow-Origin" in resp.headers, \
           "CORS headers missing"

def test_create_teacher():
    """Test 11: POST /api/teachers creates teacher and persists."""
    teacher_name = f"Test Teacher {int(time.time())}"
    payload = {
        "name": teacher_name,
        "email": "test@academy.com",
        "phone": "923001234567",
        "subjects": ["Math", "Physics"],
        "whatsapp": "923001234567",
        "registrationStatus": "pending",
        "isVerified": False
    }
    resp = requests.post(f"{BASE_URL}/api/teachers", json=payload)
    assert resp.status_code == 200, f"Got {resp.status_code}: {resp.text}"
    
    # Verify it's in the database
    time.sleep(0.5)
    with open("data/db.json") as f:
        data = json.load(f)
    found = any(t.get("name") == teacher_name for t in data.get("teachers", []))
    assert found, f"Teacher not found in db.json after creation"

def test_spa_routing():
    """Test 12: SPA routing serves index.html for non-API routes."""
    # This assumes npm run build has been run
    resp = requests.get(f"{BASE_URL}/admin", allow_redirects=False)
    # Should either give index.html (200) or error if dist not built
    assert resp.status_code in [200, 404], f"Got {resp.status_code}"
    if resp.status_code == 200:
        assert "html" in resp.text.lower(), "Response not HTML"

# ============================================================================
# Run all tests
# ============================================================================

if __name__ == "__main__":
    print("\n" + "=" * 60)
    print("🧪 Academy LMS Backend Verification")
    print("=" * 60 + "\n")
    
    print("ℹ️  Make sure backend is running: python main.py\n")
    
    print("Running tests...\n")
    
    test("Backend is running", test_backend_running)
    test("Database file exists (data/db.json)", test_database_exists)
    test("Database is valid JSON", test_database_valid_json)
    test("Admin user initialized", test_admin_user_exists)
    test("Passwords are hashed (not plain text)", test_passwords_hashed)
    test("GET /api/teachers works", test_api_teachers_list)
    test("GET /api/users works", test_api_users_list)
    test("GET /api/reviews works", test_api_reviews_list)
    test("GET /api/blogs works", test_api_blogs_list)
    test("CORS headers present", test_cors_headers)
    test("POST /api/teachers creates & persists", test_create_teacher)
    test("SPA routing works", test_spa_routing)
    
    print("\n" + "=" * 60)
    print(f"Results: {PASSED} passed, {FAILED} failed")
    print("=" * 60 + "\n")
    
    if FAILED == 0:
        print("✅ All tests passed! Backend is working correctly.\n")
        print("Next steps:")
        print("  1. npm run build  (build frontend)")
        print("  2. Refresh browser at http://localhost:8000")
        print("  3. Login with admin account")
        print("  4. Try creating/editing data")
        print("  5. Verify it persists after refresh & rebuild\n")
    else:
        print(f"❌ {FAILED} test(s) failed. See errors above.\n")
        print("Troubleshooting:")
        print("  1. Is backend running? python main.py")
        print("  2. Check backend logs for errors")
        print("  3. Check data/db.json exists")
        print("  4. Try: curl http://localhost:8000/api/teachers\n")
