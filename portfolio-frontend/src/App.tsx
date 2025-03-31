import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Navbar />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/education" element={<Education />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
