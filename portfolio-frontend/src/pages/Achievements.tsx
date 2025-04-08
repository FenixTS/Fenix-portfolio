import { useRef, useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

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
    date: '2024',
    category: 'certification',
    icon: <MilitaryTechIcon />,
    color: '#0078D4',
  },
  {
    id: 2,
    title: 'Best Project Award',
    description: 'Awarded for developing an innovative web application and using Azure Cloud Services',
    date: '2024',
    category: 'award',
    icon: <EmojiEventsIcon />,
    color: '#FFC107',
  },
  {
    id: 3,
    title: 'Full Stack Development Certification',
    description: 'Completed comprehensive full-stack development training program',
    date: '2023',
    category: 'education',
    icon: <SchoolIcon />,
    color: '#4CAF50',
  },
  
  // {
  //   id: 4,
  //   title: 'Senior Developer Promotion',
  //   description: 'Promoted to Senior Developer role for outstanding performance',
  //   date: '2023',
  //   category: 'experience',
  //   icon: <WorkIcon />,
  //   color: '#9C27B0',
  // },
  // {
  //   id: 5,
  //   title: 'React Expert Certification',
  //   description: 'Advanced React.js development certification',
  //   date: '2023',
  //   category: 'certification',
  //   icon: <MilitaryTechIcon />,
  //   color: '#61DAFB',
  // },
  // {
  //   id: 6,
  //   title: 'Outstanding Mentor Award',
  //   description: 'Recognized for excellence in mentoring junior developers',
  //   date: '2023',
  //   category: 'award',
  //   icon: <StarIcon />,
  //   color: '#FF9800',
  // },
];

// Slider images data
const sliderImages = [
  {
    id: 1,
    url: '/assets/images/Certification.jpg',
    title: 'Azure Certification',
    description: 'Microsoft Azure Fundamentals Certification Achievement',
  },
  {
    id: 2,
    url: '/assets/images/Award.jpg',
    title: 'Best Project Award',
    description: 'Recognition for Outstanding Project Development',
  },
  {
    id: 3,
    url: '/assets/images/Trainer_pic_1.jpg',
    title: 'Training Excellence',
    description: 'Successfully Trained 500+ Students in Full Stack Development',
  },
];

// Photo gallery data
const photoGallery = [
  {
    id: 1,
    img: '/assets/images/SSF_Recognition_2.JPG',
    title: 'Award Ceremony',
  },
  {
    id: 2,
    img: '/assets/images/TeamProject.png',
    title: 'Team Project',
  },
  {
    id: 3,
    img: '/assets/images/Workshop.png',
    title: 'Workshop',
  },
  {
    id: 4,
    img: '/assets/images/Students.png',
    title: 'Conference',
  },
  {
    id: 5,
    img: '/assets/images/Certification_2.jpg',
    title: 'Certification',
  },
  {
    id: 6,
    img: '/assets/images/INN&SSF_Team_2.JPG',
    title: 'Team Building',
  },
  {
    id: 7,
    img: '/assets/images/INN&SSF_Team_3.JPG',
    title: 'Team Building',
  },
    {
      id:8 ,
      img: '/assets/images/INN_Team.JPG',
      title: 'Team',
    },
    {
      id:9 ,
      img: '/assets/images/Guide.png',
      title: 'Guide',
    },
    {
      id:10 ,
      img: '/assets/images/Cognizant_Hackathon_1.png',
      title: 'Cognizant Hackathon',
    },
    {
      id:11,
      img: '/assets/images/Cognizant_Hackathon_2.png',
      title: 'Cognizant Hackathon',
    },
    {
      id:12,
      img: '/assets/images/NPR_College.jpg',
      title: 'NPR College',
    },
    {
      id:13,
      img: '/assets/images/Me_NPR.jpg',
      title: 'NPR College',
    },
    {
      id:14,
      img: '/assets/images/Screen.JPG',
      title: 'Project',
    },
    {
      id:15,
      img: '/assets/images/BestPerformer.jpg',
      title: 'Best Performer',
    },
    // {
    //   id:16,
    //   img: '/assets/images/BestPerformer_2.jpg',
    //   title: 'Best Performer',
    // },
    
    
];

const Achievements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const achievementsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 3000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

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

  const handlePhotoClick = (img: string) => {
    setSelectedPhoto(img);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <Box>
      {/* Image Slider Section */}
      <Box sx={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                  zIndex: 1,
                },
              }}
            >
              <Box
                component="img"
                src={sliderImages[currentSlide].url}
                alt={sliderImages[currentSlide].title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '80px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                  zIndex: 2,
                  width: '100%',
                  px: 4,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  {sliderImages[currentSlide].title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    opacity: 0.9,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  {sliderImages[currentSlide].description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.3)',
            color: 'white',
            zIndex: 2,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.5)',
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={handleNextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.3)',
            color: 'white',
            zIndex: 2,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.5)',
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Navigation Dots */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 2,
          }}
        >
          {sliderImages.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                p: 0.5,
                color: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: '0.8rem' }} />
            </IconButton>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6, position: 'relative', zIndex: 2 }}>
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

      {/* Photo Gallery Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Photo Gallery
          </Typography>

          <ImageList
            variant="masonry"
            cols={isMobile ? 1 : 3}
            gap={16}
            sx={{ overflow: 'hidden' }}
          >
            {photoGallery.map((item) => (
              <ImageListItem
                key={item.id}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  cursor: 'pointer',
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                  '&:hover img': {
                    transform: 'scale(1.1)',
                  },
                }}
                onClick={() => handlePhotoClick(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <IconButton
                    sx={{
                      color: 'white',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <ZoomInIcon fontSize="large" />
                  </IconButton>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>

        {/* Photo Modal */}
        <Modal
          open={!!selectedPhoto}
          onClose={handleClosePhoto}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: 1,
              boxShadow: 24,
            }}
          >
            <IconButton
              onClick={handleClosePhoto}
              sx={{
                position: 'absolute',
                right: -16,
                top: -16,
                bgcolor: 'background.paper',
                boxShadow: 2,
                '&:hover': {
                  bgcolor: 'background.default',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedPhoto || ''}
              alt="Achievement Photo"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Achievements; 