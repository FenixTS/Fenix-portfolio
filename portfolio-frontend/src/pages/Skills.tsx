import { useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.from(skillsRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'React Native', level: 70 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 50 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        // { name: 'AWS', level: 75 },
        { name: 'Azure', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'CI/CD', level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        // { name: 'Figma', level: 70 },
        { name: 'Postman', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 95 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Time Management', level: 80 },
        { name: 'Leadership', level: 80 },
        { name: 'Adaptability', level: 75 },
        { name: 'Creativity', level: 75 },
        { name: 'Proactiveness', level: 60 },
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box ref={skillsRef}>
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
          Skills
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    height: '100%',
                    backgroundColor: theme.palette.background.paper,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      fontWeight: 'bold',
                      color: theme.palette.primary.main,
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                              fontWeight: 500,
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: theme.palette.grey[200],
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              backgroundColor: theme.palette.primary.main,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills; 