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
import TechStack from '../components/TechStack';
import VideoInteractions from '../components/VideoInteractions';

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const profileRef = useRef(null);

  useGSAP(() => {
    gsap.from('.profile-content', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          height: '300px',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/banner-pattern.svg")',
            opacity: 0.1,
          }}
        />
      </Box>

      <Container maxWidth="lg">
        {/* Profile Section */}
        <Box
          className="profile-content"
          sx={{
            mt: '-100px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid container spacing={4}>
            {/* Profile Picture */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `4px solid ${theme.palette.background.paper}`,
                    boxShadow: theme.shadows[4],
                  }}
                >
                  <Box
                    component="img"
                    src="/profile.jpg"
                    alt="Profile"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            {/* Profile Info */}
            <Grid item xs={12} md={8}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Typography variant="h4" gutterBottom>
                    Your Name
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Full Stack Developer
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Passionate developer with expertise in building modern web applications.
                    Experienced in full-stack development with a focus on creating scalable
                    and maintainable solutions.
                  </Typography>
                </motion.div>
              </Paper>
            </Grid>
          </Grid>

          {/* About Section */}
          <Box sx={{ mt: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  backgroundColor: theme.palette.background.paper,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }}
                >
                  I am a passionate MERN Stack Developer & Full Stack Trainer with a strong foundation in both front-end and back-end technologies. With expertise in React.js, Node.js, Express.js, and MongoDB, I specialize in building dynamic and scalable web applications. Additionally, I have hands-on experience deploying applications on Microsoft Azure and hold an AZ-900 certification.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }}
                >
                  Beyond development, I am dedicated to mentoring and training aspiring developers, guiding them in full-stack development, real-world project execution, and industry best practices. My experience spans freelance projects, software training, and cloud-based application development, ensuring both technical excellence and impactful learning experiences.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }}
                >
                  Driven by problem-solving and innovation, I constantly explore new technologies to enhance efficiency and user experiences in web applications.
                </Typography>
              </Paper>
            </motion.div>
          </Box>

          {/* Self Introduction Video Section */}
          <Box sx={{ mt: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    mb: 3,
                  }}
                >
                  Self Introduction
                </Typography>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 Aspect Ratio
                    backgroundColor: theme.palette.grey[200],
                    borderRadius: 1,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[2],
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
                    src="/self-intro.mp4"
                    poster="/video-thumbnail.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </Box>
                <VideoInteractions />
              </Paper>
            </motion.div>
          </Box>

          {/* Tech Stack Section */}
          <Box sx={{ mt: 6 }}>
            <TechStack />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile; 