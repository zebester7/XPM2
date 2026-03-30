"""
Pydantic models for request/response validation.
"""
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Dict, Any
from datetime import datetime


class UserBase(BaseModel):
    name: str
    email: str
    role: str = "student"  # student, admin, teacher
    phoneNumber: Optional[str] = None


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    name: Optional[str] = None
    phoneNumber: Optional[str] = None
    enrolledSubjects: Optional[List[str]] = None
    completedTopics: Optional[List[str]] = None


class TeacherBase(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    subjects: List[str]
    whatsapp: str
    bio: Optional[str] = None
    mode: str = "Online"  # Online, Physical, Both
    isVerified: bool = False
    registrationStatus: str = "pending"  # pending, active


class TeacherCreate(TeacherBase):
    pass


class TeacherUpdate(BaseModel):
    name: Optional[str] = None
    subjects: Optional[List[str]] = None
    whatsapp: Optional[str] = None
    bio: Optional[str] = None
    mode: Optional[str] = None
    isVerified: Optional[bool] = None
    registrationStatus: Optional[str] = None


class ReviewBase(BaseModel):
    userName: str
    rating: int = Field(..., ge=1, le=5)
    comment: str


class LoginRequest(BaseModel):
    email: str
    password: str


class AppSettings(BaseModel):
    subscriptionFee: int = 1500
    originalPrice: int = 3999
    logoUrl: Optional[str] = None


class PastPaper(BaseModel):
    id: Optional[str] = None
    board: str  # Cambridge, Edexcel, etc
    level: str  # O Level, A Level, etc
    subject: str
    year: int
    session: str  # Summer, Winter, etc
    url: Optional[str] = None
    msUrl: Optional[str] = None


class BlogPost(BaseModel):
    id: Optional[str] = None
    title: str
    excerpt: str
    content: str
    category: str
    author: str = "XPM Academic Team"
    date: Optional[int] = None


class LearningMaterial(BaseModel):
    id: Optional[str] = None
    title: str
    type: str  # Note, Solved Paper, Marking Scheme, Worksheet
    subjectId: str
    url: str
    createdAt: Optional[int] = None
