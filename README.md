# Professional Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and Node.js. Features include a dynamic profile page, experience showcase, project portfolio, certifications display, and an AI-powered chatbot.

## Project Structure

```
portfolio/
├── portfolio-frontend/     # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── styles/       # Theme and styling
│   │   ├── utils/        # Utility functions
│   │   ├── context/      # React context
│   │   └── api/          # API integration
│   ├── public/           # Static assets
│   └── package.json
│
├── portfolio-backend/     # Node.js backend application
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   └── server.ts     # Main server file
│   └── package.json
│
└── package.json          # Root package.json for managing both projects
```

## Features

- 🎨 Dynamic theme customization with 10 color schemes and font options
- ✨ Smooth animations using GSAP and Framer Motion
- 📱 Responsive design for all devices
- 🤖 AI-powered chatbot for visitor interactions
- 👨‍💼 Professional profile showcase
- 📝 Resume download functionality
- 🎥 Video introduction
- 🔧 Tech stack showcase with animated logos
- 👨‍💻 Admin panel for easy content management
- 🔒 Secure backend with JWT authentication

## Tech Stack

- Frontend:
  - React with TypeScript
  - Vite
  - Material-UI
  - GSAP for animations
  - Framer Motion
  - Chart.js
  - Axios

- Backend:
  - Node.js with Express
  - MongoDB
  - OpenAI API for chatbot
  - JWT for authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- OpenAI API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies for all projects:
```bash
npm run install:all
```

3. Set up environment variables:

For backend (`portfolio-backend/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:5173
```

For frontend (`portfolio-frontend/.env`):
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development servers:
```bash
# Start both frontend and backend
npm run dev

# Or start them separately:
npm run dev:frontend  # Frontend only
npm run dev:backend   # Backend only
```

## Admin Panel

Access the admin panel at `/admin` to manage:
- Profile information
- Skills
- Experience
- Projects
- Certifications

## Customization

### Theme Colors
The website includes 10 pre-defined color schemes:
- Default
- Dark
- Ocean
- Forest
- Sunset
- Midnight
- Spring
- Autumn
- Winter
- Summer

### Font Families
Choose from 10 different font options:
- Default (Roboto)
- Elegant (Playfair Display)
- Modern (Poppins)
- Classic (Times New Roman)
- Clean (Open Sans)
- Bold (Montserrat)
- Tech (Source Code Pro)
- Friendly (Quicksand)
- Professional (Lato)
- Artistic (Dancing Script)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 