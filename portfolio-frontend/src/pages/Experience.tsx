import { useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const experienceRef = useRef(null);

  useGSAP(() => {
    gsap.from(experienceRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Led development of multiple full-stack applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup',
      period: '2018 - 2020',
      description: 'Developed and maintained web applications using modern JavaScript frameworks and cloud services.',
    },
    {
      title: 'Software Developer',
      company: 'IT Solutions',
      period: '2016 - 2018',
      description: 'Built and maintained client-side applications using React and TypeScript.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box ref={experienceRef}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Experience
        </Typography>

        <Timeline 
          position={isMobile ? "right" : "alternate"}
          sx={{
            '& .MuiTimelineItem-root': {
              minHeight: { xs: '120px', sm: '150px' },
            },
            '& .MuiTimelineContent-root': {
              py: { xs: 1, sm: 2 },
            },
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot 
                  color="primary" 
                  sx={{ 
                    width: { xs: '12px', sm: '16px' },
                    height: { xs: '12px', sm: '16px' },
                  }}
                />
                {index < experiences.length - 1 && (
                  <TimelineConnector 
                    sx={{ 
                      backgroundColor: theme.palette.primary.main,
                      height: { xs: '40px', sm: '60px' },
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: isMobile ? 50 : (index % 2 === 0 ? -50 : 50) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, sm: 3 },
                      mb: 2,
                      backgroundColor: theme.palette.background.paper,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        fontWeight: 'bold',
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      color="primary" 
                      gutterBottom
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      gutterBottom
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      }}
                    >
                      {exp.period}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        lineHeight: 1.6,
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default Experience; 