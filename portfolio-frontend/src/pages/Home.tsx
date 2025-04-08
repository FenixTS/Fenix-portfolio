import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorageIcon from '@mui/icons-material/Storage';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hi, I'm Fenix T.S
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Full Stack Developer | MERN Stack Expert | Mobile Developer
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Passionate about creating innovative solutions and transforming ideas into reality through code.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/projects')}
                  sx={{
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      bgcolor: 'rgba(0, 0, 0, 0.04)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="/assets/Fenix-profile.JPG"
                alt="Fenix T.S"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  borderRadius: '9px',
                  boxShadow: '0 8px 54px rgba(0,0,0,0.15)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Featured Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            align="center"
            sx={{ mb: 4 }}
          >
            What I Do
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Web Development',
                description: 'Building modern, responsive web applications using React,and Material-UI. Creating seamless user experiences with clean, maintainable code.',
                icon: <CodeIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
              },
              {
                title: 'Mobile Development',
                description: 'Developing cross-platform mobile applications for iOS and Android using React Native. Delivering native-like performance and user experience.',
                icon: <PhoneAndroidIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
              },
              {
                title: 'Backend Development',
                description: 'Architecting scalable server-side solutions with Node.js, Express, and MongoDB. Implementing robust APIs and database management systems.',
                icon: <StorageIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            px: 4,
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.9) 0%, rgba(245, 0, 87, 0.9) 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("/assets/pattern.png")',
              opacity: 0.1,
            },
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom sx={{ position: 'relative' }}>
            Ready to Work Together?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, position: 'relative' }}>
            Let's create something amazing
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              position: 'relative',
              '&:hover': {
                bgcolor: 'grey.100',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 