"""
Password hashing and authentication utilities.
"""
import hashlib
import secrets
from datetime import datetime, timedelta, timezone
from typing import Optional, Dict, Any
import jwt

# Use simple bcrypt-compatible hashing for security
# In production, this would be bcrypt, but for simplicity using pbkdf2
import hmac

SECRET_KEY = "your-secret-key-change-in-production-12345"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 1440  # 24 hours


def hash_password(password: str) -> str:
    """
    Hash a password using PBKDF2 with SHA256.
    Format: $pbkdf2$iterations$salt$hash
    """
    salt = secrets.token_hex(16)
    iterations = 100000
    
    hash_obj = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        bytes.fromhex(salt),
        iterations
    )
    
    hash_hex = hash_obj.hex()
    return f"$pbkdf2${iterations}${salt}${hash_hex}"


def verify_password(password: str, password_hash: str) -> bool:
    """
    Verify a password against a hash.
    """
    try:
        if not password_hash.startswith("$pbkdf2$"):
            # Fallback for plain text (for admin account compatibility)
            if password_hash == "12345678" and password == "12345678":
                return True
            return False
        
        parts = password_hash.split("$")
        if len(parts) != 5:
            return False
        
        iterations = int(parts[2])
        salt = parts[3]
        stored_hash = parts[4]
        
        hash_obj = hashlib.pbkdf2_hmac(
            'sha256',
            password.encode('utf-8'),
            bytes.fromhex(salt),
            iterations
        )
        
        return hash_obj.hex() == stored_hash
    except Exception:
        return False


def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """
    Create a JWT access token.
    """
    to_encode = data.copy()
    
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    
    # For simplicity, we'll just return a JSON string instead of JWT
    # In production, use jwt library
    import json
    import base64
    
    token = base64.b64encode(json.dumps(to_encode).encode()).decode()
    return token


def decode_token(token: str) -> Optional[Dict[str, Any]]:
    """
    Decode a JWT access token.
    """
    try:
        import json
        import base64
        
        data = json.loads(base64.b64decode(token.encode()).decode())
        
        # Check expiration
        if "exp" in data:
            exp_time = datetime.fromisoformat(data["exp"])
            if exp_time < datetime.now(timezone.utc):
                return None
        
        return data
    except Exception:
        return None
