import { Box, Container, Typography, Grid, Paper, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';

const About = () => {
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
                  src="/profile-image.jpg"
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
      </Container>
    </Box>
  );
};

export default About; 