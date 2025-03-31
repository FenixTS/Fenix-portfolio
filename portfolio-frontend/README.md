# Portfolio Website Frontend

A modern, responsive portfolio website built with React, TypeScript, and Material-UI. This frontend application showcases professional experience, projects, skills, and certifications with a beautiful and interactive user interface.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme support
- 📱 Mobile-first approach
- ⚡ Fast and optimized performance
- 🎭 Smooth animations and transitions
- 🔒 Secure authentication
- 📝 Dynamic content management
- 🎥 Video introduction
- 📄 Resume download
- 🔗 Social media integration

## Tech Stack

- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- Framer Motion
- GSAP
- React Router
- Axios
- Chart.js

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add necessary environment variables:
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
portfolio-frontend/
├── public/
│   ├── profile.jpg
│   └── introduction.mp4
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Profile.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Admin.tsx
│   ├── styles/
│   │   └── theme.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Theme
The application supports custom themes and color schemes. You can modify the theme in `src/styles/theme.ts`.

### Content
Update the content in respective page components to showcase your information.

### Assets
Replace the following files in the `public` directory:
- `profile.jpg` - Your profile picture
- `introduction.mp4` - Your introduction video

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio-frontend](https://github.com/yourusername/portfolio-frontend) 