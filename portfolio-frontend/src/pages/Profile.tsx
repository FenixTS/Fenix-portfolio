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
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TechStack from '../components/TechStack';
import VideoInteractions from '../components/VideoInteractions';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

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
    <Box sx={{ minHeight: '100vh' }}>
      {/* Banner Section */}
      <Box
        sx={{
          height: { xs: '250px', sm: '300px' },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          marginTop: '0px',
        }}
      >
        {/* Animated Background Pattern */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/assets/Profile-Banner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Animated Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
          }}
        />

        {/* Banner Content */}
        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative' }}>
          <Grid container spacing={4} alignItems="center" sx={{ height: '100%' }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  Fenix T.S
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    mb: 3,
                    opacity: 0.9,
                  }}
                >
                  Full Stack Developer & MERN Stack Trainer
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                  href='assets/files/Fenix-Resume.pdf'
                  download={"assets/files/Fenix-Resume.pdf"}
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'grey.100',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download Resume
                  </Button>
                  <Button
                  href='https://www.linkedin.com/in/fenix-t-s/'
                  target="_blank"
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Connect
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {[
                    { 
                      icon: <GitHubIcon />, 
                      label: 'GitHub',
                      href: 'https://github.com/FenixTS',
                      target: '_blank'
                    },
                    { 
                      icon: <LinkedInIcon />, 
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/fenix-t-s/',
                      target: '_blank'
                    },
                    { icon: <TwitterIcon />, label: 'Twitter' },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Paper
                        component={social.href ? 'a' : 'div'}
                        href={social.href}
                        target={social.target}
                        elevation={3}
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          bgcolor: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          cursor: social.href ? 'pointer' : 'default',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            bgcolor: 'rgba(255,255,255,0.2)',
                          },
                        }}
                      >
                        {social.icon}
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'white',
                            mt: 1,
                            fontSize: '0.75rem',
                          }}
                        >
                          {social.label}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Profile Section */}
        <Box
          className="profile-content"
          sx={{
            mt: { xs: '-50px', sm: '-100px' },
            position: 'relative',
            zIndex: 1,
            pb: 8,
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
                    src="/assets/Profile-icon.webp"
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
          <Box sx={{ mt: 8 }}>
            <TechStack />
          </Box>

          {/* Personal Details Section */}
          <Box sx={{ mt: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
                  Personal Details
                </Typography>
                
                <Grid container spacing={4}>
                  {/* Contact Information */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                      Contact Information
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon color="primary" />
                        <Typography>email@example.com</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon color="primary" />
                        <Typography>+1 234 567 8900</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon color="primary" />
                        <Typography>City, Country</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CakeIcon color="primary" />
                        <Typography>Date of Birth</Typography>
                      </Box>
                        {/* Languages */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                      <LanguageIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Languages Known
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      <Chip
                        label="Tamil"
                        color="primary"
                        variant="outlined"
                        sx={{
                          fontSize: '1rem',
                          padding: '8px 16px',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      />
                      <Chip
                        label="English"
                        color="primary"
                        variant="outlined"
                        sx={{
                          fontSize: '1rem',
                          padding: '8px 16px',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      />
                      <Chip
                        label="Malayalam"
                        color="primary"
                        variant="outlined"
                        sx={{
                          fontSize: '1rem',
                          padding: '8px 16px',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                     
                    </Box>
                  </Grid>

                

                  {/* Social Links */}
                  <Grid item xs={12} md={6}>
                    
                    <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                      Social Links
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        href="https://www.linkedin.com/in/fenix-t-s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ justifyContent: 'flex-start' }}
                      >
                        LinkedIn Profile
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/FenixTS"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ justifyContent: 'flex-start' }}
                      >
                        GitHub Profile
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<TwitterIcon />}
                        href="https://twitter.com/yourhandle"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ justifyContent: 'flex-start' }}
                      >
                        Twitter Profile
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        href="/resume.pdf"
                        target="_blank"
                        download
                        sx={{
                          mt: 4,
                          bgcolor: theme.palette.primary.main,
                          color: 'white',
                          '&:hover': {
                            bgcolor: theme.palette.primary.dark,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'transform 0.3s ease',
                          boxShadow: 2,
                          fontWeight: 'bold',
                        }}
                      >
                        Download Resume
                      </Button>
                    </Box>
                  </Grid>

                  {/* Additional Information */}
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                      Additional Information
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 3, bgcolor: 'background.default' }}>
                      <Typography paragraph>
                        I am a passionate Full Stack Developer with expertise in building modern web applications.
                        My journey in software development started with a curiosity about how things work on the web.
                        Today, I specialize in creating responsive, user-friendly applications using cutting-edge
                        technologies and best practices.
                      </Typography>
                      <Typography paragraph>
                        When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
                        and sharing my knowledge through technical writing and mentoring.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile; 