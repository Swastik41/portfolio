# 🚀 XVerse Portfolio - Deployment Guide

## Overview
This guide will help you deploy your MERN stack portfolio website live so you can share it on LinkedIn and other platforms.

Your stack:
- **Frontend**: React + Vite + TypeScript
- **Backend**: Node.js + Express
- **Database**: Supabase PostgreSQL
- **Email**: Gmail SMTP

---

## 🎯 Recommended Deployment Strategy

### Option 1: **Vercel + Railway (RECOMMENDED - Easiest)**
- **Frontend**: Vercel (Free, excellent for React)
- **Backend**: Railway (Free tier available)
- **Database**: Supabase (Already set up)

### Option 2: **Netlify + Railway**
- **Frontend**: Netlify
- **Backend**: Railway

### Option 3: **Full Stack on Railway**
- Deploy both frontend and backend on Railway

---

## 📋 Step-by-Step Deployment (Vercel + Railway)

### **PHASE 1: Prepare Your Code**

#### Step 1: Setup Environment Variables
Create a `.env.production` file in the root directory:
```env
DATABASE_URL=postgresql://user:password@host:5432/database
GMAIL_EMAIL=your-gmail@gmail.com
GMAIL_PASSWORD=your-app-password
NODE_ENV=production
```

#### Step 2: Ensure Build Script Works
Run locally:
```bash
npm run build
npm run start
```
Make sure there are no errors.

#### Step 3: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - portfolio ready for deployment"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

---

### **PHASE 2: Deploy Frontend on Vercel**

#### Step 1: Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub

#### Step 2: Import Project
1. Click "Add New Project"
2. Select your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### Step 3: Environment Variables in Vercel
- Go to Project Settings → Environment Variables
- Add:
  ```
  VITE_API_URL=https://your-backend-url.railway.app
  ```

#### Step 4: Deploy
- Click "Deploy"
- Wait for deployment to complete
- You'll get a URL like: `https://xverse.vercel.app`

---

### **PHASE 3: Deploy Backend on Railway**

#### Step 1: Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up with GitHub

#### Step 2: Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Select your repository

#### Step 3: Add Environment Variables
1. Go to Variables tab
2. Add all variables:
   ```
   DATABASE_URL=your_supabase_url
   GMAIL_EMAIL=your-email@gmail.com
   GMAIL_PASSWORD=your-app-password
   NODE_ENV=production
   PORT=5000
   ```

#### Step 4: Configure Start Command
1. Go to Settings tab
2. Set **Start Command**: `npm run start`

#### Step 5: Deploy
- Railway will automatically build and deploy
- You'll get a backend URL like: `https://your-project.railway.app`

---

### **PHASE 4: Connect Frontend & Backend**

#### Update Vercel with Backend URL
1. Go to Vercel Project Settings → Environment Variables
2. Update `VITE_API_URL` to your Railway backend URL
3. Redeploy

#### Update API Calls in Code
Make sure your contact form and API calls point to the backend:
```javascript
const API_URL = process.env.VITE_API_URL || 'http://localhost:5000';

fetch(`${API_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 🔧 Configuration Checklist

### Database (Supabase)
- ✅ PostgreSQL database created
- ✅ Tables created with Drizzle
- ✅ Connection URL in `.env`

### Email (Gmail)
- ✅ Generate App Password (not regular password)
  - Google Account → Security → App passwords
  - Select "Mail" and "Windows Computer"
  - Use this 16-character password

### API Endpoints
- ✅ `/api/contact` - POST (contact form)
- ✅ `/api/projects` - GET (fetch projects)
- ✅ `/api/experience` - GET (fetch experience)
- ✅ `/api/skills` - GET (fetch skills)

### CORS Setup
Add to your Express backend:
```javascript
import cors from 'cors';

app.use(cors({
  origin: [
    'https://xverse.vercel.app',
    'http://localhost:5000'
  ],
  credentials: true
}));
```

---

## 📱 Share on LinkedIn

### 1. Update Your LinkedIn Profile
- Profile URL: `https://xverse.vercel.app`
- Headline: "Full Stack Developer | MERN Stack Specialist"
- Add portfolio link in "Websites" section

### 2. Create a Post
```
🚀 Excited to share my new portfolio website built with:
- React + TypeScript
- Node.js + Express
- MongoDB + PostgreSQL
- Tailwind CSS + Framer Motion

Check it out: https://xverse.vercel.app

#FullStackDeveloper #MERN #WebDevelopment #Portfolio
```

### 3. Pin the Post
Make it visible on your profile

---

## 🧪 Testing Before Going Live

### Local Testing
```bash
npm run dev           # Development
npm run build         # Build frontend
npm run start         # Start backend
```

### Pre-Deployment Checklist
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ Contact form submits successfully
- ✅ Images load properly
- ✅ Mobile responsive
- ✅ No console errors
- ✅ Meta tags display correctly

---

## ⚠️ Important Security Notes

### Environment Variables
- **NEVER commit** `.env` to GitHub
- Use `.gitignore` to exclude it:
  ```
  .env
  .env.local
  .env.production.local
  ```

### Gmail App Password
- Go to: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Select Mail + Windows Computer
- Use the 16-character password (remove spaces)

### Database Connection
- Only expose PostgreSQL connection via backend
- Frontend should never have direct database access

---

## 📊 After Deployment Monitoring

### Check Deployment Status
1. **Vercel**: Dashboard → Project → Deployments
2. **Railway**: Project → Deployments

### Monitor Errors
1. **Vercel**: Monitoring → Edge Functions Logs
2. **Railway**: Logs tab in project

### Test Live Endpoints
```bash
curl https://xverse.vercel.app        # Frontend
curl https://your-backend.railway.app/api/contact  # Backend
```

---

## 🆘 Common Issues & Solutions

### Issue: Contact Form Not Working
**Solution**: Check VITE_API_URL in Vercel environment variables

### Issue: Database Connection Error
**Solution**: Verify DATABASE_URL is correct in Railway environment

### Issue: Images Not Loading
**Solution**: Ensure paths use `/public/` and files exist in `client/public/`

### Issue: Gmail Sending Fails
**Solution**: 
- Use App Password (not regular password)
- Enable "Less secure app access"

### Issue: CORS Errors
**Solution**: Add frontend URL to CORS whitelist in backend

---

## 🎉 Final Steps

1. **Test Everything Live**
   - Submit contact form
   - Navigate all pages
   - Check on mobile

2. **Update LinkedIn**
   - Add portfolio URL to profile
   - Post about the launch

3. **Share on Social Media**
   - Twitter/X
   - GitHub profile
   - Dev.to or Medium article

4. **Monitor Performance**
   - Check Vercel analytics
   - Monitor Railway logs
   - Fix any issues immediately

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **Supabase Docs**: https://supabase.com/docs
- **React Docs**: https://react.dev

---

## 🎯 Your Portfolio URLs After Deployment

- **Portfolio**: https://xverse.vercel.app
- **Backend API**: https://your-project.railway.app
- **Database**: Supabase (credentials in env variables)
- **LinkedIn Profile**: Update with portfolio URL

---

**Congratulations! Your portfolio is now live! 🎊**

Share the link on LinkedIn and watch opportunities come your way! 🚀
