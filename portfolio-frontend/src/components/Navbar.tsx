import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteIcon from '@mui/icons-material/Palette';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import { motion } from 'framer-motion';

interface NavbarProps {
  onColorSchemeChange: (scheme: string) => void;
  onFontFamilyChange: (font: string) => void;
}

const Navbar = ({ onColorSchemeChange, onFontFamilyChange }: NavbarProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [colorMenuAnchor, setColorMenuAnchor] = useState<null | HTMLElement>(null);
  const [fontMenuAnchor, setFontMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleColorMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setColorMenuAnchor(event.currentTarget);
  };

  const handleFontMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFontMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuAnchor(null);
    setColorMenuAnchor(null);
    setFontMenuAnchor(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const navItems = [
    { label: 'Profile', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];

  const colorSchemes = [
    { label: 'Default', value: 'default' },
    { label: 'Dark', value: 'dark' },
    { label: 'Ocean', value: 'ocean' },
    { label: 'Forest', value: 'forest' },
    { label: 'Sunset', value: 'sunset' },
  ];

  const fontFamilies = [
    { label: 'Default', value: 'default' },
    { label: 'Elegant', value: 'elegant' },
    { label: 'Modern', value: 'modern' },
    { label: 'Classic', value: 'classic' },
    { label: 'Clean', value: 'clean' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => handleNavigation('/')}
        >
          Fenix T.S
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              onClick={() => handleNavigation(item.path)}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: theme.palette.primary.main,
                  transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Theme and Font Controls */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <IconButton
            color="inherit"
            onClick={handleColorMenuOpen}
            size="large"
          >
            <PaletteIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleFontMenuOpen}
            size="large"
          >
            <FontDownloadIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            color="inherit"
            onClick={handleMobileMenuOpen}
            size="large"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMenuClose}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            selected={location.pathname === item.path}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Color Scheme Menu */}
      <Menu
        anchorEl={colorMenuAnchor}
        open={Boolean(colorMenuAnchor)}
        onClose={handleMenuClose}
      >
        {colorSchemes.map((scheme) => (
          <MenuItem
            key={scheme.value}
            onClick={() => {
              onColorSchemeChange(scheme.value);
              handleMenuClose();
            }}
          >
            {scheme.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Font Family Menu */}
      <Menu
        anchorEl={fontMenuAnchor}
        open={Boolean(fontMenuAnchor)}
        onClose={handleMenuClose}
      >
        {fontFamilies.map((font) => (
          <MenuItem
            key={font.value}
            onClick={() => {
              onFontFamilyChange(font.value);
              handleMenuClose();
            }}
          >
            {font.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar; 