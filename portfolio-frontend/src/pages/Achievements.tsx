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
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'certification' | 'education' | 'experience' | 'award';
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'AZ-900 Azure Fundamentals',
    description: 'Microsoft Certified: Azure Fundamentals',
    date: '2023',
    category: 'certification',
    icon: <MilitaryTechIcon />,
    color: '#0078D4',
  },
  {
    id: 2,
    title: 'Full Stack Development Certification',
    description: 'Completed comprehensive full-stack development training program',
    date: '2022',
    category: 'education',
    icon: <SchoolIcon />,
    color: '#4CAF50',
  },
  {
    id: 3,
    title: 'Best Project Award',
    description: 'Awarded for developing an innovative web application',
    date: '2022',
    category: 'award',
    icon: <EmojiEventsIcon />,
    color: '#FFC107',
  },
  {
    id: 4,
    title: 'Senior Developer Promotion',
    description: 'Promoted to Senior Developer role for outstanding performance',
    date: '2023',
    category: 'experience',
    icon: <WorkIcon />,
    color: '#9C27B0',
  },
  {
    id: 5,
    title: 'React Expert Certification',
    description: 'Advanced React.js development certification',
    date: '2023',
    category: 'certification',
    icon: <MilitaryTechIcon />,
    color: '#61DAFB',
  },
  {
    id: 6,
    title: 'Outstanding Mentor Award',
    description: 'Recognized for excellence in mentoring junior developers',
    date: '2023',
    category: 'award',
    icon: <StarIcon />,
    color: '#FF9800',
  },
];

const Achievements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const achievementsRef = useRef(null);

  useGSAP(() => {
    gsap.from('.achievement-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, []);

  const getCategoryColor = (category: Achievement['category']) => {
    switch (category) {
      case 'certification':
        return theme.palette.primary.main;
      case 'education':
        return theme.palette.success.main;
      case 'experience':
        return theme.palette.secondary.main;
      case 'award':
        return theme.palette.warning.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          height: '300px',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/banner-pattern.svg")',
            opacity: 0.1,
          }}
        />
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 2,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              Achievements
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                opacity: 0.9,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              Milestones and accomplishments in my professional journey
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          {achievements.map((achievement) => (
            <Grid item xs={12} sm={6} md={4} key={achievement.id}>
              <motion.div
                className="achievement-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: getCategoryColor(achievement.category),
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: '50%',
                        backgroundColor: `${getCategoryColor(achievement.category)}20`,
                        color: getCategoryColor(achievement.category),
                      }}
                    >
                      {achievement.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {achievement.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {achievement.category}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" paragraph>
                    {achievement.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block' }}
                  >
                    {achievement.date}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements; 