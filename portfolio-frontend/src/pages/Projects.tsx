import { useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const theme = useTheme();
  const projectsRef = useRef(null);

  useGSAP(() => {
    gsap.from(projectsRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  const projects = [
    {
      title: 'Dhanapal Jellewary ',
      description: 'A full-stack e-commerce platform built with MERN stack. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/assets/images/Dhanapal.png',
      technologies: ['React', 'Node.js', 'SQL'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://dhanapaljewellery.com/',
    },
    {
      title: 'Bright tech solution',
      description: 'A dashboard for managing cloud resources on Azure. Includes resource monitoring, cost analysis, and automated scaling features.',
      image: '/assets/images/Brighttech.png',
      technologies: ['React'],
      github: 'https://github.com/yourusername/cloud-dashboard',
      demo: 'https://www.brightechsoftware.com/',
    },
    {
      title: 'Figgo',
      description: 'A modern portfolio website with animations and dynamic content management. Built with React, TypeScript, and Material-UI.',
      image: '/assets/images/Figgo.png',
      technologies: ['React Native','Node.js','Mongo.DB'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://play.google.com/store/apps/details?id=com.jebilinjebilin.ShopMart',
    },
    {
      title: 'Tamil United Church ',
      description: 'A modern portfolio website with animations and dynamic content management. Built with React, TypeScript, and Material-UI.',
      image: '/assets/images/Chruch.png',
      technologies: ['React'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://tamilunitedchurch.ca/',
    },
    {
      title: 'SmartKal ',
      description: 'A modern portfolio website with animations and dynamic content management. Built with React, TypeScript, and Material-UI.',
      image: '/assets/images/Smartkal.png',
      technologies: ['React Native','Node.js','Mongo.DB'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://play.google.com/store/apps/details?id=com.honto.honto',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box ref={projectsRef}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                      transition: 'all 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects; 