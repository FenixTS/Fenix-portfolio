import { useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const profileRef = useRef(null);

  useGSAP(() => {
    gsap.from(profileRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box ref={profileRef}>
        <Grid container spacing={4}>  
          {/* Left Column - Profile Image and Social Links */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  mb: 3,
                  backgroundColor: theme.palette.background.paper,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '100%', // 1:1 Aspect Ratio for profile image
                    backgroundColor: theme.palette.grey[200],
                    borderRadius: 1,
                    overflow: 'hidden',
                    mb: 2,
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Fenix T.S"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    GitHub
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Column - Bio and Video */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3 },
                  mb: 3,
                  backgroundColor: theme.palette.background.paper,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2rem' },
                    fontWeight: 'bold',
                  }}
                >
                  Fenix T.S
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  }}
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    lineHeight: 1.8,
                  }}
                >
                  I am a passionate Full Stack Developer with expertise in building modern web applications.
                  With a strong foundation in both frontend and backend technologies, I create scalable
                  and efficient solutions that solve real-world problems.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  href="/path-to-your-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mb: 3 }}
                >
                  Download Resume
                </Button>

                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                  }}
                >
                  Self Intro
                </Typography>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 Aspect Ratio
                    backgroundColor: theme.palette.grey[200],
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <video
                    controls
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    src="/path-to-your-video.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile; 