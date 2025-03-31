import { useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Certifications = () => {
  const theme = useTheme();
  const certificationsRef = useRef(null);

  useGSAP(() => {
    gsap.from(certificationsRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  const certifications = [
    {
      title: 'Azure Solutions Architect Expert',
      issuer: 'Microsoft',
      date: '2023',
      image: '/certifications/azure.jpg',
      credentialId: 'AZ-305',
      category: 'Cloud Computing',
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: '/certifications/aws.jpg',
      credentialId: 'SAA-C03',
      category: 'Cloud Computing',
    },
    {
      title: 'Professional Full Stack Developer',
      issuer: 'Meta',
      date: '2023',
      image: '/certifications/meta.jpg',
      credentialId: 'META-FSD',
      category: 'Web Development',
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google',
      date: '2023',
      image: '/certifications/gcp.jpg',
      credentialId: 'GCP-PRO',
      category: 'Cloud Computing',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box ref={certificationsRef}>
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
          Certifications
        </Typography>

        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                      transition: 'all 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 200,
                      objectFit: 'cover',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                    image={cert.image}
                    alt={cert.title}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {cert.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {cert.issuer}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Issued: {cert.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Credential ID: {cert.credentialId}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Chip
                        label={cert.category}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Certifications; 