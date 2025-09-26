# Professional Portfolio - MERN Stack

A modern, professional portfolio website built with React, Vite, and Express. Features smooth animations, responsive design, and a working contact form.

## 🚀 Features

- **Modern React Frontend** with Vite for fast development
- **Smooth Animations** using Framer Motion
- **Responsive Design** that works on all devices
- **Professional UI/UX** with clean, modern styling
- **Working Contact Form** with email functionality
- **Form Validation** both client-side and server-side
- **Professional Sections**: Hero, About, Skills, Portfolio, Contact
- **Mobile-First Design** with hamburger menu

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Framer Motion (animations)
- React Icons
- Modern CSS with CSS Variables

### Backend
- Node.js
- Express.js
- Nodemailer (email functionality)
- Express Validator
- CORS

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd professional-portfolio-mern
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   NODE_ENV=development
   ```

4. **Gmail Setup (if using Gmail):**
   - Enable 2-factor authentication on your Gmail account
   - Generate an app password: Google Account → Security → App passwords
   - Use the generated app password in the `.env` file

## 🚀 Running the Application

### Development Mode
Run both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- Frontend (Vite): http://localhost:3000
- Backend (Express): http://localhost:5000

### Individual Commands
```bash
# Frontend only
npm run client

# Backend only
npm run server

# Build for production
npm run build

# Preview production build
npm run preview

# Production start
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Skills.jsx & Skills.css
│   │   ├── Portfolio.jsx & Portfolio.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx & App.css
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Header.jsx` - Your name in logo
- `src/components/Hero.jsx` - Hero title and description
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Your technical skills
- `src/components/Portfolio.jsx` - Your projects
- `src/components/Footer.jsx` - Social links and contact info

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Individual CSS files
- CSS variables in `:root` for easy theme customization

### Adding Projects
Edit `src/components/Portfolio.jsx` and update the `projects` array with your actual projects.

## 📧 Contact Form

The contact form includes:
- Real-time validation
- Server-side validation
- Email sending via Nodemailer
- Success/error feedback
- Responsive design

## 🌐 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Heroku/Railway/Render)
1. Set environment variables on your hosting platform
2. Deploy the server code

### Full-Stack (Railway/Render)
Deploy the entire project with build commands configured.

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_USER` | Your email address | Yes |
| `EMAIL_PASS` | Your email app password | Yes |
| `PORT` | Server port (default: 5000) | No |
| `NODE_ENV` | Environment (development/production) | No |

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Features

- Vite for fast development and building
- Code splitting and lazy loading ready
- Optimized images and assets
- Smooth animations with Framer Motion
- Modern CSS with efficient selectors

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Built with ❤️ using React, Vite, and Express**