import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  useTheme,
  Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Link href="mailto:your.email@example.com" color="inherit" underline="hover">
                  your.email@example.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Typography>+1 234 567 8900</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon color="primary" />
                <Typography>Chennai, Tamil Nadu</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About
              </Link>
              <Link href="/projects" color="inherit" underline="hover">
                Projects
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                href="https://www.linkedin.com/in/fenix-t-s/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    color: theme.palette.primary.dark,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://github.com/FenixTS"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    color: theme.palette.primary.dark,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    color: theme.palette.primary.dark,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Your Name. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Made with ❤️ using React & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 