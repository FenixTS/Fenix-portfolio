import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip, Button, useTheme, useMediaQuery, Dialog, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openResume, setOpenResume] = useState(false);

  const handleOpenResume = () => {
    setOpenResume(true);
  };

  const handleCloseResume = () => {
    setOpenResume(false);
  };

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'FenixTS_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
    'Material-UI', 'Git', 'Docker', 'AWS', 'REST APIs',
    'GraphQL', 'Jest', 'CI/CD', 'Agile', 'UI/UX Design'
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Leading development of enterprise applications using React and Node.js'
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple web applications using modern technologies'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2014 - 2018',
      description: 'Graduated with honors, specialized in Software Engineering'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Profile Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  src="/assets/Profile-icon.webp"
                  alt="Profile"
                  sx={{
                    width: 200,
                    height: 200,
                    mb: 3,
                    border: '4px solid',
                    borderColor: 'primary.main',
                  }}
                />
                <Typography variant="h4" component="h1" gutterBottom>
                  Your Name
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Full Stack Developer
                </Typography>
                <Typography color="text.secondary" align="center" paragraph>
                  Passionate about creating elegant solutions to complex problems
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  About Me
                </Typography>
                <Typography paragraph>
                  I am a passionate Full Stack Developer with expertise in building modern web applications.
                  With a strong foundation in both frontend and backend development, I create scalable
                  and maintainable solutions that solve real-world problems.
                </Typography>
                <Typography paragraph>
                  My journey in software development started with a curiosity about how things work on the web.
                  Today, I specialize in creating responsive, user-friendly applications using cutting-edge
                  technologies and best practices.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
              <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Experience
          </Typography>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  <Paper elevation={2} sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {exp.company} | {exp.period}
                    </Typography>
                    <Typography>
                      {exp.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Education Section */}
        <Box>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Education
          </Typography>
          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                >
                  <Paper elevation={2} sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {edu.degree}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {edu.school} | {edu.period}
                    </Typography>
                    <Typography>
                      {edu.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Resume Section */}
        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              My Resume
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                startIcon={<VisibilityIcon />}
                onClick={handleOpenResume}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: 'white',
                  '&:hover': {
                    bgcolor: theme.palette.primary.dark,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                  px: 4,
                  py: 1.5,
                }}
              >
                View Resume
              </Button>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadResume}
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                  px: 4,
                  py: 1.5,
                }}
              >
                Download Resume
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* Resume Dialog */}
      <Dialog
        fullScreen
        open={openResume}
        onClose={handleCloseResume}
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: 'background.default',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseResume}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '850px',
              height: 'calc(100vh - 100px)',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <object
              data="/resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            >
              <Box
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <PictureAsPdfIcon sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Unable to display PDF
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Your browser doesn't support PDF preview.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownloadResume}
                >
                  Download Instead
                </Button>
              </Box>
            </object>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default About; 