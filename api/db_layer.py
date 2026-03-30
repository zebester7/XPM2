"""
Persistent database layer with file locking.
Ensures data consistency across concurrent requests.
"""
import json
import os
import fcntl
import time
from pathlib import Path
from typing import Any, Optional, Dict, List
from contextlib import contextmanager

DB_FILE = "data/db.json"
LOCK_FILE = "data/db.lock"


def ensure_db_dir():
    """Create data directory if it doesn't exist."""
    Path("data").mkdir(exist_ok=True)


@contextmanager
def file_lock(lock_file: str, timeout: int = 5):
    """
    Context manager for file-based locking.
    Prevents concurrent writes to db.json.
    """
    ensure_db_dir()
    lock_path = Path(lock_file)
    
    # Create lock file if it doesn't exist
    lock_path.touch(exist_ok=True)
    
    start = time.time()
    lock_fd = None
    
    try:
        lock_fd = os.open(str(lock_path), os.O_RDWR)
        
        # Try to acquire lock with timeout
        while True:
            try:
                fcntl.flock(lock_fd, fcntl.LOCK_EX | fcntl.LOCK_NB)
                break
            except (OSError, IOError):
                if time.time() - start > timeout:
                    raise TimeoutError(f"Could not acquire file lock after {timeout}s")
                time.sleep(0.01)
        
        yield
        
    finally:
        if lock_fd is not None:
            try:
                fcntl.flock(lock_fd, fcntl.LOCK_UN)
                os.close(lock_fd)
            except Exception:
                pass


def init_db():
    """Initialize database with default structure if it doesn't exist."""
    ensure_db_dir()
    
    if os.path.exists(DB_FILE):
        return
    
    default_data = {
        "users": [
            {
                "id": "super-admin-1",
                "name": "Zubair Ahmad",
                "email": "zubairahmadisb7p2@gmail.com",
                "password_hash": "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5YmMxA5hZxVnS",  # hashed "12345678"
                "role": "admin",
                "phoneNumber": "923009508592",
                "enrolledSubjects": [],
                "completedTopics": [],
                "registeredAt": int(time.time() * 1000),
                "subscriptionStatus": "active"
            }
        ],
        "teachers": [
            {
                "id": "t1",
                "name": "Sir Zubair",
                "email": "zubair@academy.com",
                "phone": "923009508592",
                "subjects": ["Physics", "Mathematics"],
                "whatsapp": "923009508592",
                "registrationStatus": "active",
                "isVerified": True,
                "attendance": [],
                "activeTenures": []
            }
        ],
        "questions": [],
        "reviews": [],
        "pastpapers": [],
        "blogs": [],
        "materials": [],
        "groups": [],
        "groupmessages": [],
        "settings": {
            "subscriptionFee": 1500,
            "originalPrice": 3999,
            "logoUrl": None
        }
    }
    
    with file_lock(LOCK_FILE):
        with open(DB_FILE, "w") as f:
            json.dump(default_data, f, indent=2)


def read_db() -> Dict[str, Any]:
    """Read entire database with file locking."""
    ensure_db_dir()
    init_db()
    
    with file_lock(LOCK_FILE):
        try:
            with open(DB_FILE, "r") as f:
                return json.load(f)
        except (json.JSONDecodeError, FileNotFoundError):
            init_db()
            with open(DB_FILE, "r") as f:
                return json.load(f)


def write_db(data: Dict[str, Any]):
    """Write entire database with file locking."""
    ensure_db_dir()
    
    with file_lock(LOCK_FILE):
        with open(DB_FILE, "w") as f:
            json.dump(data, f, indent=2)


def get_collection(collection_name: str) -> List[Dict[str, Any]]:
    """Get a collection (users, teachers, etc)."""
    data = read_db()
    return data.get(collection_name, [])


def save_collection(collection_name: str, items: List[Dict[str, Any]]):
    """Save a collection back to database."""
    data = read_db()
    data[collection_name] = items
    write_db(data)


def get_item(collection_name: str, item_id: str) -> Optional[Dict[str, Any]]:
    """Get a single item from a collection by ID."""
    items = get_collection(collection_name)
    return next((item for item in items if item.get("id") == item_id), None)


def save_item(collection_name: str, item: Dict[str, Any]) -> Dict[str, Any]:
    """Save or update a single item in a collection."""
    items = get_collection(collection_name)
    item_id = item.get("id")
    
    # Find and update existing item, or add new
    idx = next((i for i, it in enumerate(items) if it.get("id") == item_id), None)
    if idx is not None:
        items[idx] = item
    else:
        items.append(item)
    
    save_collection(collection_name, items)
    return item


def delete_item(collection_name: str, item_id: str) -> bool:
    """Delete an item from a collection."""
    items = get_collection(collection_name)
    original_len = len(items)
    items = [it for it in items if it.get("id") != item_id]
    
    if len(items) < original_len:
        save_collection(collection_name, items)
        return True
    return False


def find_user_by_email(email: str) -> Optional[Dict[str, Any]]:
    """Find a user by email address."""
    users = get_collection("users")
    return next((u for u in users if u.get("email", "").lower() == email.lower()), None)


def find_user_by_id(user_id: str) -> Optional[Dict[str, Any]]:
    """Find a user by ID."""
    return get_item("users", user_id)


# Initialize database on module load
init_db()
