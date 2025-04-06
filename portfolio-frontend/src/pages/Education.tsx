import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarIcon from '@mui/icons-material/Star';

const Education = () => {
  const academicBackground = [
    {
      degree: 'Bachelor of Engineering in Mechanical Engineering',
      school: 'Anna University',
      period: '2018 - 2022',
      description: 'Transitioned from Mechanical Engineering to IT, leveraging problem-solving skills and analytical thinking to excel in software development. Completed various programming certifications and projects to build expertise in full-stack development.',
      achievements: [
        'CGPA: 8.01/10',
      
        
    
      ]
    },
    {
      degree: 'Hr. Sec School',
      school: 'Christucoil LMS Hr. Sec School',
      period: '2017 - 2018',
      description: 'Focus on Mathematics',
      achievements: [
        'Percentage: 53%',
        'State Board'
      ]
    },
    {
      degree: 'SSLC',
      school: 'AG Matriculation School',
      period: '2015 - 2016',
      description: 'Completed secondary education with strong academic performance, focusing on core subjects including Mathematics, Science and English',
      achievements: [
        'Percentage: 87%',
        'State Board' 
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Professional certification in cloud architecture and services',
      link: 'https://aws.amazon.com/certification/'
    },
    {
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '2022',
      description: 'Certified in agile project management methodologies',
      link: 'https://www.scrum.org/'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google',
      date: '2022',
      description: 'Expertise in Google Cloud Platform development',
      link: 'https://cloud.google.com/certification/'
    }
  ];

  const achievements = [
    {
      title: 'Best Undergraduate Project Award',
      organization: 'University Department',
      date: '2018',
      description: 'Awarded for developing an innovative AI-powered healthcare application'
    },
    {
      title: 'Hackathon Winner',
      organization: 'Tech Conference',
      date: '2017',
      description: 'First place in the annual university hackathon'
    },
    {
      title: 'Research Grant Recipient',
      organization: 'Research Institute',
      date: '2017',
      description: 'Received funding for research in machine learning applications'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              mb: 4,
              background: 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <SchoolIcon sx={{ mr: 2, verticalAlign: 'middle' }} />
            Education & Achievements
          </Typography>
        </motion.div>

        {/* Academic Background */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            Academic Background
          </Typography>
          <Timeline position="alternate">
            {academicBackground.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  {index < academicBackground.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Paper elevation={3} sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {edu.degree}
                      </Typography>
                      <Typography color="text.secondary" gutterBottom>
                        {edu.school} | {edu.period}
                      </Typography>
                      <Typography paragraph>
                        {edu.description}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {edu.achievements.map((achievement, i) => (
                          <Typography component="li" key={i} sx={{ mb: 1 }}>
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Certifications */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            <WorkspacePremiumIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Professional Certifications
          </Typography>
          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {cert.title}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {cert.issuer} | {cert.date}
                    </Typography>
                    <Typography paragraph>
                      {cert.description}
                    </Typography>
                    <Typography
                      component="a"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        mt: 'auto',
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      View Certificate →
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Achievements */}
        <Box>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            <EmojiEventsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Notable Achievements
          </Typography>
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <StarIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {achievement.title}
                      </Typography>
                      <Typography color="text.secondary" gutterBottom>
                        {achievement.organization} | {achievement.date}
                      </Typography>
                      <Typography>
                        {achievement.description}
                      </Typography>
                    </Box>
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

export default Education; 