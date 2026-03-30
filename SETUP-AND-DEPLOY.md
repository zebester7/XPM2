# Academy LMS - Setup & Deployment Guide

## 🎯 Architecture Overview

This is a **hybrid full-stack application**:
- **Frontend**: React 19 + Vite SPA (compiled to static files)
- **Backend**: FastAPI (Python) running as the API server
- **Database**: File-based JSON (data/db.json) with file locking for concurrent safety
- **Persistence**: All changes are saved to the backend immediately (not localStorage)

---

## 📋 Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- Git (recommended)

---

## 🚀 Local Development Setup

### Step 1: Clone/Navigate to Project
```bash
cd "e:\Academy website"
```

### Step 2: Install Backend Dependencies
```bash
pip install fastapi uvicorn pydantic python-multipart
```

### Step 3: Install Frontend Dependencies
```bash
npm install
```

### Step 4: Create Environment File
```bash
cp .env.example .env
```

Edit `.env` if needed (defaults should work for local development).

### Step 5: Build Frontend (Required for Backend to Serve)
```bash
npm run build
```

This creates a `dist/` folder with optimized production-ready static files.

### Step 6: Start Backend Server
```bash
python main.py
```

The server will:
- Start on `http://localhost:8000`
- Serve API endpoints at `/api/*`
- Serve the React app at `/` (SPA routing)
- Initialize data/db.json on first run

### Step 7: Access the Application

**Public Site**: http://localhost:8000/
**Admin Panel**: http://localhost:8000/admin (after login)

### Default Admin Credentials
- **Email**: `zubairahmadisb7p2@gmail.com`
- **Password**: `12345678`
- ⚠️ Change immediately after first login!

---

## 🔄 Development Workflow (For Making Frontend Changes)

If you need to modify React components:

### Terminal 1 - Frontend Auto-rebuild:
```bash
npm run dev
```
(This starts Vite dev server on port 5173 for fast development)

### Terminal 2 - Backend API:
```bash
python main.py
```

Access dev site at `http://localhost:5173` (Vite proxy will forward API calls to backend)

---

## 📊 Data Flow (How It Works)

### Admin Creates/Updates Data:
```
1. Admin fills form in React → 2. Form submit
3. React → POST /api/endpoint
4. FastAPI saves to data/db.json
5. File locking ensures no corruption from concurrent writes
6. All other clients sync automatically (pull every 2s)
7. Public site instantly shows the update
```

### Public Site Reads Data:
```
1. User visits site
2. JavaScript loads (runs in browser)
3. db.ts initializes → reads from localStorage cache
4. Loads full fresh data from /api/teachers, /api/blogs, etc
5. Displays data
6. Every 2 seconds: checks API for updates (catches admin changes)
```

---

## 🔐 Security Notes

### Passwords
- **Hashed with PBKDF2** (secure, not plain text)
- User passwords are hashed before storage
- Admin account is initialized with a hashed password

### Change All Defaults After First Deploy
1. Change admin password in admin panel
2. Update SECRET_KEY in .env for production
3. Enable HTTPS in production

### Authentication
- Simple token-based (Base64 for MVP, use proper JWT in production)
- All API endpoints can read public data
- Admin-only endpoints should be added with auth decorators (TODO in production)

---

## 📦 Production Deployment (Vercel + Backend)

### Option A: Deploy Everything on Vercel (Recommended for Quick Start)

⚠️ **Issue**: Vercel is serverless and can't write to the file system. We need an alternative.

### Option B: Split Deployment (RECOMMENDED)

**Frontend on Vercel** (static files):
```bash
# In project root
npm run build
# Deploy dist/ folder to Vercel
```

**Backend on Render/Railway/Fly.io** (with database):

#### Using Render.com (Easy):
1. Go to https://render.com
2. Create new Web Service
3. Connect your GitHub repo
4. Build command: `pip install -r requirements.txt`
5. Start command: `uvicorn main:app --host 0.0.0.0 --port 8000`
6. Add environment variables from `.env`
7. Deploy

#### Using Railway.app (Easier):
1. Go to https://railway.app
2. Create new project → Deploy from GitHub
3. Add `requirements.txt` (auto-detect Python)
4. Railway auto-detects and runs FastAPI
5. Add environment variables
6. Deploy - gets a public URL immediately

### Step-by-Step for Railway Deployment:

**1. Create requirements.txt:**
```bash
pip freeze > requirements.txt
```

Or manually create with:
```
fastapi==0.104.1
uvicorn==0.24.0
python-multipart==0.0.6
pydantic==2.5.0
```

**2. Create Procfile (for Railway):**
```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

**3. Update Frontend API Calls:**

In React code, update API base URL:
```typescript
// For development: http://localhost:8000
// For production: https://your-railway-backend-url.railway.app

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000';
```

**4. Deploy Frontend to Vercel:**
- Connect GitHub repo
- Vercel auto-detects Create React App + Vite
- Add environment variable: `REACT_APP_API_URL=https://your-backend-url`
- Deploy

### Option C: Deploy Everything on a Single VPS

If you want to keep it simple (one server):

1. **Rent a VPS**: DigitalOcean, Linode, Hetzner (~$5-10/month)
2. **SSH into server**
3. **Install Python + Node:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install nodejs python3.11 python3-pip git
   ```
4. **Clone and setup:**
   ```bash
   git clone your-repo /app
   cd /app
   pip install -r requirements.txt
   npm install
   npm run build
   ```
5. **Run with PM2 (process manager):**
   ```bash
   npm install -g pm2
   pm2 start main.py --name "academy-api" --interpreter python3
   pm2 save
   ```
6. **Point domain** to VPS IP address
7. **Use Nginx** as reverse proxy + SSL with Let's Encrypt

---

## 🔄 Migration from Old System

### What Changed:
1. ✅ Passwords now **hashed** (not plain text)
2. ✅ Data stored on **backend** (not localStorage)
3. ✅ Admin changes **persist** across deploys
4. ✅ Public site reads from **real database**
5. ✅ Works offline (localStorage cache) but syncs when online

### Migration Steps:
1. Backup old db.json
2. Deploy new backend
3. Data auto-initializes on first run
4. Manual reset: delete `data/db.json`, restart backend (recreates with defaults)

---

## 🧪 Testing After Deployment

### Checklist:
- [ ] Admin login works
- [ ] Admin can create a teacher
- [ ] Public site shows the teacher
- [ ] Admin updates teacher - public site updates in 2 seconds
- [ ] Admin deletes teacher - public site updates in 2 seconds
- [ ] Refresh browser - data is still there
- [ ] Rebuild & redeploy - data persists
- [ ] HTTPS works (if on production domain)
- [ ] Passwords appear hashed in data/db.json (not plain text)

---

## 🐛 Troubleshooting

### "Address already in use" error
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9
```

### "No such file or directory: data/db.json"
The backend auto-creates it. If it doesn't:
```bash
mkdir -p data
python main.py  # Will initialize db.json
```

### Frontend can't reach backend (CORS error)
- Make sure backend is running
- Check API URL in browser console
- If on different domains, verify CORS is enabled (it is by default)

### Password still plain text
- Using old db.json? Delete it and restart
- New passwords from signup are hashed automatically
- Existing passwords won't be hashed until user changes them

### Data not persisting after refresh
- Check browser console for fetch errors
- Verify backend is running
- Check data/db.json exists and is readable

---

## 📝 Next Steps (Recommended)

1. **Add proper authentication**: Use JWT tokens properly
2. **Add admin auth checks**: Verify role before allowing admin operations
3. **Add database**: Move from JSON to PostgreSQL for production
4. **Add rate limiting**: Prevent abuse
5. **Add logging**: Track who changes what and when
6. **Add backups**: Daily backups of data/db.json
7. **Add monitoring**: Error tracking with Sentry

---

## 📞 Support

For issues, check:
1. Backend logs (terminal running main.py)
2. Browser console (F12 → Console)
3. Network tab (F12 → Network) to see API calls
4. data/db.json to verify data is saved
