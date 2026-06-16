# Modern Portfolio Website

A modern, responsive, and premium personal portfolio website for a Computer Science student and Frontend Developer. Built with React, Vite, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x600/6366f1/ffffff?text=Modern+Portfolio)

## ✨ Features

### Frontend Features
- 🎨 **Modern Design**: Minimal futuristic design with glassmorphism effects
- 🌗 **Dark/Light Mode**: Toggle between dark and light themes
- ✨ **Smooth Animations**: Framer Motion powered animations and transitions
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- 🎯 **Custom Cursor**: Interactive custom cursor with hover effects
- 📊 **Scroll Progress**: Visual progress indicator while scrolling
- 🌌 **Particle Background**: Animated particle effects
- 🎭 **Loading Animation**: Professional loading screen
- 🔄 **Scroll Reveal**: Elements animate into view on scroll

### Sections
1. **Hero Section**: Full-screen landing with typing effect and social links
2. **About Section**: Professional bio with statistics
3. **Skills Section**: Animated progress bars for frontend and backend skills
4. **Projects Section**: Filterable project gallery with hover effects
5. **Services Section**: Professional services offered
6. **Experience Section**: Timeline of education and work experience
7. **Contact Section**: Contact form with email and social media links

### Backend Features
- 📧 **Contact Form API**: Node.js + Express backend
- ✅ **Form Validation**: Email and required field validation
- 💾 **Message Storage**: In-memory message storage
- 🔒 **CORS Enabled**: Secure cross-origin requests

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ParticlesBackground.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Skills.tsx
│   │   └── App.tsx
│   └── styles/
│       ├── theme.css
│       └── fonts.css
├── server/
│   ├── server.mjs
│   ├── package.json
│   └── .env.example
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Backend Setup

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install backend dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Create environment file** (optional)
   ```bash
   cp .env.example .env
   ```

4. **Start the backend server**
   ```bash
   pnpm start
   # or
   npm start
   ```

5. **Backend will run on**
   ```
   http://localhost:5000
   ```

### Running Both Frontend and Backend

Open two terminal windows:

**Terminal 1 (Frontend):**
```bash
pnpm dev
```

**Terminal 2 (Backend):**
```bash
cd server
pnpm start
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/app/components/Hero.tsx`)
   - Change "Your Name" to your actual name
   - Update social media links (GitHub, LinkedIn, Twitter, Email)

2. **About Section** (`src/app/components/About.tsx`)
   - Edit your bio and description
   - Update statistics (projects, years of experience)

3. **Skills Section** (`src/app/components/Skills.tsx`)
   - Modify skill levels based on your expertise
   - Add or remove skills

4. **Projects Section** (`src/app/components/Projects.tsx`)
   - Replace example projects with your actual projects
   - Add project images, descriptions, and links

5. **Experience Section** (`src/app/components/Experience.tsx`)
   - Update with your actual education and work experience

6. **Contact Section** (`src/app/components/Contact.tsx`)
   - Update email address and social media links

### Theme Customization

Edit `/src/styles/theme.css` to customize:
- Colors (gradients, backgrounds)
- Typography (fonts, sizes)
- Spacing
- Border radius

### Color Scheme

The default color scheme uses:
- **Primary**: Cyan (#06b6d4)
- **Secondary**: Purple (#a855f7)
- **Accent**: Pink (#ec4899)

To change colors, search for `from-cyan-500`, `to-purple-500`, etc., in component files.

## 📦 Building for Production

### Frontend Build

```bash
pnpm build
# or
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 🚀 Deployment

### Deploy Frontend to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Alternative: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Deploy Backend

#### Option 1: Vercel (Serverless)

Create `vercel.json` in the root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/server.mjs",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/server.mjs"
    }
  ]
}
```

#### Option 2: Railway/Render/Heroku

1. Create account on Railway/Render/Heroku
2. Connect your GitHub repository
3. Set build command: `cd server && npm install`
4. Set start command: `cd server && npm start`
5. Deploy

#### Option 3: VPS (DigitalOcean, Linode, etc.)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone and setup
git clone <your-repo>
cd portfolio/server
npm install

# Start with PM2
pm2 start server.mjs --name portfolio-api
pm2 save
pm2 startup
```

### Environment Variables

Update Contact.tsx with your production backend URL:

```typescript
const response = await fetch('https://your-backend-url.com/api/contact', {
  // ...
});
```

## 🧪 API Endpoints

### POST /api/contact
Submit a contact form message

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": {
    "id": 1,
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

### GET /api/messages
Get all submitted messages (admin only)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "messages": [...]
}
```

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- Email: your@email.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

**Made with ❤️ by [Your Name]**
