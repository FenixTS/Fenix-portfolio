import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createCustomTheme, colorSchemes, fontFamilies } from './styles/theme';
import { useState } from 'react';
import { Box } from '@mui/material';

// Pages
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';
import Admin from './pages/Admin';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [colorScheme, setColorScheme] = useState<keyof typeof colorSchemes>('default');
  const [fontFamily, setFontFamily] = useState<keyof typeof fontFamilies>('default');

  const theme = createCustomTheme(colorScheme, fontFamily);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar 
            onColorSchemeChange={setColorScheme}
            onFontFamilyChange={setFontFamily}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 4,
              px: 2,
            }}
          >
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/skills" element={<Skills />} />
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
