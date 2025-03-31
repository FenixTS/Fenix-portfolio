import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
                Welcome to My Portfolio
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                I'm a passionate developer crafting beautiful and functional web experiences
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/projects')}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
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
                src="/hero-image.svg"
                alt="Hero Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
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
                description: 'Creating responsive and modern web applications using React and TypeScript',
                icon: '🌐',
              },
              {
                title: 'UI/UX Design',
                description: 'Designing intuitive and beautiful user interfaces with Material-UI',
                icon: '🎨',
              },
              {
                title: 'Backend Development',
                description: 'Building robust server-side applications with Node.js and Express',
                icon: '⚙️',
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
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Typography variant="h1" sx={{ mb: 2 }}>
                      {item.icon}
                    </Typography>
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
            background: 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
            color: 'white',
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Work Together?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Let's create something amazing
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
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