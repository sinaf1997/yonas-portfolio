# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Frontend Dependencies
```bash
pnpm install
```

### Step 2: Install Backend Dependencies
```bash
cd server
pnpm install
cd ..
```

### Step 3: Run the Project

**Option A: Run Both (Recommended)**

Open two terminals:

Terminal 1 - Frontend:
```bash
pnpm dev
```

Terminal 2 - Backend:
```bash
cd server
pnpm start
```

**Option B: Frontend Only (Testing)**
```bash
pnpm dev
```
*Note: Contact form won't work without backend*

## 🌐 Access Your Portfolio

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## ✏️ Customize Your Portfolio

1. **Update Personal Info** in these files:
   - `src/app/components/Hero.tsx` - Name, title, social links
   - `src/app/components/About.tsx` - Bio, statistics
   - `src/app/components/Skills.tsx` - Your skills and levels
   - `src/app/components/Projects.tsx` - Your projects
   - `src/app/components/Experience.tsx` - Education & work
   - `src/app/components/Contact.tsx` - Email address

2. **Add Project Images**:
   - Place images in `public/` folder
   - Update image paths in `Projects.tsx`

3. **Change Colors**:
   - Edit `src/styles/theme.css` for global colors
   - Gradients: Search for `cyan-500`, `purple-500`, `pink-500`

## 📱 Test on Mobile

The portfolio is fully responsive. Test it:
- Open DevTools (F12)
- Click "Toggle Device Toolbar" (Ctrl+Shift+M)
- Try different device sizes

## 🎨 Dark/Light Mode

Click the sun/moon icon in the navbar to toggle themes.

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## ❓ Need Help?

Check the full [README.md](./README.md) for detailed documentation.

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Kill process on port 5000
npx kill-port 5000
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Backend Connection Error
Make sure both frontend and backend are running. Check that the backend URL in `Contact.tsx` is `http://localhost:5000`.

---

**Happy Coding! 🎉**
