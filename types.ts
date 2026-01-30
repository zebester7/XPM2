
export type Level = 'O Level' | 'AS Level' | 'A2 Level' | 'IGCSE' | 'Federal Board' | 'Grade 1' | 'Grade 2' | 'Grade 3' | 'Grade 4' | 'Grade 5' | 'Grade 6' | 'Grade 7' | 'Grade 8' | 'Grade 9' | 'Grade 10' | 'Grade 11' | 'Grade 12';
export type Board = 'Cambridge' | 'Edexcel' | 'Federal Board' | 'AQA' | 'OCR' | 'WJEC' | 'CCEA' | 'IB' | 'AP';
export type SubscriptionStatus = 'none' | 'pending' | 'active';

export interface AppSettings {
  subscriptionFee: number;
  originalPrice: number;
}

export interface LearningMaterial {
  id: string;
  subjectId: string;
  title: string;
  type: 'Note' | 'Solved Paper' | 'Marking Scheme' | 'Worksheet';
  url: string; // File base64 or URL
  createdAt: number;
}

export interface AttendanceEntry {
  id: string;
  date: number;
  studentName: string;
  subject: string;
  status: 'Present' | 'Absent';
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  bio?: string;
  photo?: string; // base64
  whatsapp: string;
  utilityBill?: string; // base64
  cnic?: string; // base64
  degree?: string; // base64
  mode: 'Online' | 'Physical' | 'Both';
  isVerified: boolean;
  registrationStatus: 'pending' | 'active';
  attendance: AttendanceEntry[];
  activeTenures: {
    id: string;
    studentName: string;
    subject: string;
    status: 'Ongoing' | 'Completed' | 'Left In Between';
    startDate: number;
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  password?: string;
  role: 'student' | 'admin' | 'teacher';
  enrolledSubjects: string[]; // Subject IDs
  completedTopics: string[]; // Topic IDs
  registeredAt?: number;
  lastLogin?: number;
  subscriptionStatus?: SubscriptionStatus;
  teacherProfileId?: string; // Reference to Teacher object if user is a teacher
  paymentProof?: {
    transactionId: string;
    screenshot: string; // base64
    method: 'Easypaisa' | 'JazzCash';
    timestamp: number;
  };
}

export interface Subject {
  id: string;
  name: string;
  level: Level;
  description: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  resources: Resource[];
  index?: number;
}

export interface Resource {
  title: string;
  type: 'pdf' | 'link' | 'video';
  url: string;
}

export interface PastPaper {
  id: string;
  board: Board;
  level: Level;
  subject: string;
  year: number;
  session: 'Summer' | 'Winter';
  url: string;
  msUrl?: string; // Marking Scheme URL
  status?: 'Attempted' | 'Completed' | 'None';
}

export interface Question {
  id: string;
  userId: string;
  userName: string;
  subject: string;
  content: string;
  timestamp: number;
  reply?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  timestamp: number;
}

export interface StudyGroup {
  id: string;
  subject: string;
  level: Level;
  members: string[]; // User IDs
}

export interface GroupMessage {
  id: string;
  groupId: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: number;
  category: string;
  author: string;
}
