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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openResume, setOpenResume] = useState(false);

  const handleOpenResume = () => {
    window.open('/assets/files/Fenix-Resume.pdf', '_blank');
  };

  const handleCloseResume = () => {
    setOpenResume(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/files/Fenix-Resume.pdf';
    link.download = 'Fenix-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    {
      category: 'Frontend Development',
      items: ['React', 'TypeScript', 'Material-UI', 'HTML/CSS', 'JavaScript', 'Redux', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Mobile Development',
      items: ['React Native', 'iOS Development', 'Android Development', 'Flutter', 'Expo']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Microsoft Azure', 'AWS', 'Docker', 'Git', 'CI/CD', 'Azure DevOps', 'Kubernetes', 'Jenkins']
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Developer & MERN Stack Trainer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Developing and maintaining web applications using MERN stack. Training aspiring developers in full-stack development.',
      achievements: [
        'Built scalable web applications using React, Node.js, and MongoDB',
        'Mentored 50+ students in MERN stack development',
        'Implemented best practices in software development and deployment',
        'Developed cross-platform mobile applications using React Native',
        'Created and deployed cloud-based solutions using Azure and AWS'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Previous Company',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web and mobile applications using modern technologies.',
      achievements: [
        'Led development of enterprise applications using React and Node.js',
        'Implemented CI/CD pipelines for automated deployment',
        'Optimized application performance and user experience',
        'Developed RESTful APIs and integrated third-party services',
        'Collaborated with cross-functional teams to deliver high-quality software'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Your University',
      period: '2016 - 2020',
      description: 'Specialized in Software Engineering and Web Development',
      achievements: [
        'Graduated with honors',
        'Completed advanced coursework in web and mobile development',
        'Participated in multiple hackathons and coding competitions',
        'Developed several projects using modern web technologies',
        'Received academic excellence awards'
      ]
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
                  src="/assets/Profile-icon.jpg"
                  alt="Fenix T.S"
                  sx={{
                    width: 200,
                    height: 200,
                    mb: 3,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                />
                <Typography variant="h4" component="h1" gutterBottom>
                  Fenix T.S
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Full Stack Developer & MERN Stack Trainer
                </Typography>
                <Typography color="text.secondary" align="center" paragraph>
                  Passionate about creating innovative solutions and mentoring the next generation of developers
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/fenix-t-s/"
                    target="_blank"
                    sx={{
                      bgcolor: '#0077b5',
                      '&:hover': {
                        bgcolor: '#005582',
                      },
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/FenixTS"
                    target="_blank"
                    sx={{
                      bgcolor: '#333',
                      '&:hover': {
                        bgcolor: '#000',
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
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
                  I am a passionate MERN Stack Developer & Full Stack Trainer with expertise in both front-end and back-end technologies. 
                  With a strong foundation in React.js, Node.js, Express.js, and MongoDB, I specialize in building dynamic and scalable web applications.
                </Typography>
                <Typography paragraph>
                  Beyond development, I am dedicated to mentoring and training aspiring developers, guiding them in full-stack development, 
                  real-world project execution, and industry best practices. My experience spans freelance projects, software training, 
                  and cloud-based application development.
                </Typography>
                <Typography>
                  Driven by problem-solving and innovation, I constantly explore new technologies to enhance efficiency and user experiences in web applications.
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
            <Grid container spacing={4}>
              {skills.map((category, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      {category.category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {category.items.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          color="primary"
                          variant="outlined"
                          sx={{ m: 0.5 }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
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
                    <Typography paragraph>
                      {exp.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                      {exp.achievements.map((achievement, aIndex) => (
                        <Typography component="li" key={aIndex} sx={{ mb: 1 }}>
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
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
                    <Typography paragraph>
                      {edu.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                      {edu.achievements.map((achievement, aIndex) => (
                        <Typography component="li" key={aIndex} sx={{ mb: 1 }}>
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
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