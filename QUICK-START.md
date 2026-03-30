# Quick Start - Academy LMS (5 Minutes to Working)

## TL;DR

```bash
# 1. Install dependencies
pip install -r requirements.txt && npm install

# 2. Build frontend
npm run build

# 3. Run backend
python main.py

# 4. Open browser
# Visit: http://localhost:8000
# Login: zubairahmadisb7p2@gmail.com / 12345678

# 5. Test it works
python verify.py
```

---

## What You Get

✅ Admin panel that saves permanently  
✅ Public site that gets live updates  
✅ Data persists after restart/rebuild  
✅ Passwords are hashed  
✅ Real working full-stack app  

---

## Step 1: Install Python Dependencies

```bash
# Windows users:
pip install -r requirements.txt

# Or if that doesn't work:
pip3 install fastapi==0.104.1 uvicorn==0.24.0 python-multipart==0.0.6 pydantic==2.5.0
```

## Step 2: Install Node Dependencies

```bash
npm install
```

## Step 3: Build Frontend

```bash
npm run build
```

Creates `dist/` folder with optimized static files.

## Step 4: Start Backend

```bash
python main.py
```

You'll see:
```
INFO:     Application startup complete
INFO:     Uvicorn running on http://0.0.0.0:8000
```

Leave this running in a terminal.

## Step 5: Open in Browser

Go to: **http://localhost:8000**

You'll see the academy website. Click the login button.

## Step 6: Admin Login

- Email: `zubairahmadisb7p2@gmail.com`
- Password: `12345678`

## Step 7: Try Creating a Teacher

Go to Admin → Teachers → Add New Teacher
- Fill in form
- Click Save
- See it on the public site within 2 seconds

## Step 8: Verify It Persists

- Refresh page (Cmd/Ctrl+R)
- Teacher is still there ✅

---

## Test Everything

```bash
python verify.py
```

Expected result:
```
✅ Results: 12 passed, 0 failed
```

If all pass: **You're done!** The system is working.

If any fail: Check the error and see `SETUP-AND-DEPLOY.md` troubleshooting section.

---

## What Just Happened

1. **Backend Started**: FastAPI running on port 8000
2. **Database Created**: `data/db.json` file with persistent storage
3. **Frontend Served**: React app compiled and served from backend
4. **API Endpoints**: All /api/ routes working
5. **Admin Features**: Create, edit, delete - all persisted

---

## Want to Deploy?

See `SETUP-AND-DEPLOY.md` for:
- Deploying to Railway (5 minutes)
- Deploying to VPS (30 minutes)
- Deploying to Vercel + separate backend

---

## Want to Develop?

See `SETUP-AND-DEPLOY.md` → "Development Workflow" for:
- Using `npm run dev` for fast React development
- Running backend and frontend separately
- Hot reload for React changes

---

## Common Issues

### "Port already in use"
```bash
# Kill the process on port 8000
lsof -ti:8000 | xargs kill -9
```

### "pip: command not found"
```bash
# Use python -m pip instead
python -m pip install -r requirements.txt
```

### "npm: command not found"
- Install Node.js from https://nodejs.org
- Then: `npm install`

### Data not persisting
- Check `data/db.json` exists
- Check backend is running (terminal where you ran `python main.py`)
- Check browser console (F12) for errors

### Frontend shows nothing
- Did you run `npm run build`?
- Did you restart `python main.py` after building?

---

## Next: Understanding the Architecture

Read `README-IMPLEMENTATION.md` for detailed explanation of what's working and why.

Read `ARCHITECTURE-FIX-REPORT.md` for technical deep dive.

---

**That's it! You now have a working production-ready LMS.** 🎓
