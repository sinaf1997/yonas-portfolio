# ⚡ Quick Start Guide

## 🏃 Run Your Portfolio (2 Commands)

### Terminal 1 - Frontend
```bash
pnpm dev
```
**Opens at**: http://localhost:5173

### Terminal 2 - Backend
```bash
cd server && pnpm install && pnpm start
```
**API runs on**: http://localhost:5000

---

## ✏️ Customize in 5 Minutes

### 1. Your Name & Info
**File**: `src/app/components/Hero.tsx`
```typescript
// Line 69: Change this
Hi, I'm Your Name
```

### 2. Social Media Links
**File**: `src/app/components/Hero.tsx`
```typescript
// Line 107-110: Update these URLs
{ icon: FiGithub, href: 'https://github.com/YOUR_USERNAME' },
{ icon: FiLinkedin, href: 'https://linkedin.com/in/YOUR_PROFILE' },
{ icon: FiTwitter, href: 'https://twitter.com/YOUR_USERNAME' },
{ icon: FiMail, href: 'mailto:your@email.com' }
```

### 3. Email Address
**File**: `src/app/components/Contact.tsx`
```typescript
// Line 26: Update your email
{ icon: FiMail, label: 'Email', value: 'your@email.com' }
```

### 4. Your Projects
**File**: `src/app/components/Projects.tsx`
```typescript
// Line 12-67: Replace with your projects
{
  id: 1,
  title: 'Your Project Name',
  description: 'What it does...',
  image: '/path-to-image.jpg',
  github: 'https://github.com/...',
  demo: 'https://...',
  tags: ['React', 'Tailwind']
}
```

### 5. Skills & Levels
**File**: `src/app/components/Skills.tsx`
```typescript
// Line 12-35: Adjust percentage based on your skills
{ name: 'React', level: 88, icon: FaReact }
```

---

## 📁 Project Structure

```
portfolio/
├── src/app/
│   ├── App.tsx           # Main app
│   └── components/       # All sections
│       ├── Hero.tsx      # Landing
│       ├── About.tsx     # Bio
│       ├── Skills.tsx    # Skills
│       ├── Projects.tsx  # Portfolio
│       ├── Services.tsx  # Services
│       ├── Experience.tsx # Timeline
│       ├── Contact.tsx   # Contact form
│       └── ...
└── server/
    └── server.mjs        # Backend API
```

---

## 🎨 Change Colors

Search and replace in all component files:

| Current | Replace With | Color |
|---------|--------------|-------|
| `cyan-500` | `blue-500` | Blue |
| `purple-500` | `violet-500` | Violet |
| `pink-500` | `rose-500` | Rose |

**Example**:
```typescript
// Find this:
from-cyan-500 to-purple-500

// Replace with:
from-blue-500 to-violet-500
```

---

## 🚀 Deploy to Vercel (3 Steps)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio
   git push -u origin main
   ```

2. **Deploy Frontend**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"

3. **Deploy Backend**
   - Same process, point to `/server` directory
   - Or use Railway: [railway.app](https://railway.app)

---

## 📱 Sections Overview

| Section | File | What to Update |
|---------|------|----------------|
| 🏠 Hero | `Hero.tsx` | Name, title, social links |
| 👤 About | `About.tsx` | Bio, profile photo, stats |
| 💪 Skills | `Skills.tsx` | Skill names & percentages |
| 🎨 Projects | `Projects.tsx` | Your projects with images |
| 🛠️ Services | `Services.tsx` | Services you offer |
| 📚 Experience | `Experience.tsx` | Education & work history |
| 📧 Contact | `Contact.tsx` | Email & social media |

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npx kill-port 5173  # Frontend
npx kill-port 5000  # Backend
```

### Backend Not Working
1. Check backend is running: `cd server && pnpm start`
2. Check URL in Contact.tsx is `http://localhost:5000`
3. Check console for errors (F12)

### Animations Not Working
- Framer Motion installed? `pnpm add framer-motion`

---

## 📚 Full Documentation

- **Detailed Guide**: [README.md](./README.md)
- **Setup Instructions**: [SETUP.md](./SETUP.md)
- **Changes Made**: [CHANGELOG.md](./CHANGELOG.md)

---

## 🎯 Checklist Before Deploy

- [ ] Updated your name in Hero
- [ ] Updated all social media links
- [ ] Updated email address
- [ ] Added your real projects
- [ ] Updated skills & experience
- [ ] Tested on mobile (F12 > Toggle Device)
- [ ] Tested dark/light mode
- [ ] Tested contact form works
- [ ] Added professional project images
- [ ] Removed placeholder text

---

**Ready to launch? Let's go! 🚀**
