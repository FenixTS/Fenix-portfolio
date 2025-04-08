import { useState } from 'react';
import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface TechItem {
  name: string;
  logo: string;
  description: string;
}

const techStack: TechItem[] = [
  {
    name: 'JavaScript',
    logo: '/assets/logos/JavaScript-logo.png',
    description: 'A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
  {
    name: 'Node.js',
    logo: '/assets/logos/Node-logo.png',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
  },
  {
    name: 'React',
    logo: '/assets/logos/React-logo.png',
    description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
  },
  {
    name: 'Express',
    logo: '/assets/logos/express-logo.png',
    description: 'A minimal and flexible Node.js web application framework.',
  },
  {
    name: 'TypeScript',
    logo: '/assets/logos/TypeScript-logo.png',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'MongoDB',
    logo: '/assets/logos/Mongodb-logo.png',
    description: 'A NoSQL database program that uses JSON-like documents with optional schemas.',
  },
 
  {
    name: 'Bootstrap',
    logo: '/assets/logos/Bootstrap-logo.png',
    description: 'A popular CSS framework for developing responsive and mobile-first websites.',
  },
  {
    name: 'Material-UI',
    logo: '/assets/logos/MaterialUI-logo.png',
    description: 'A comprehensive suite of UI tools implementing Google\'s Material Design.',
  },
  {
    name: 'Azure',
    logo: '/assets/logos/Azure-logo.png',
    description: 'A platform for developing, shipping, and running applications in containers.',
  },
  {
    name: 'JSON',
    logo: '/assets/logos/Json-logo.webp',
    description: 'A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.',
  },
  {
    name: 'Postman',
    logo: '/assets/logos/Postman-logo.png',
    description: 'A platform for developing, shipping, and running applications in containers.',
  },
  {
    name: 'Firebase',
    logo: '/assets/logos/Firebase-logo.png',
    description: 'A platform for developing, shipping, and running applications in containers.',
  },
];

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (tech: TechItem) => {
    setSelectedTech(tech);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTech(null);
  };

  useGSAP(() => {
    gsap.from('.tech-item', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
        }}
      >
        Tech Stack
      </Typography>
      <Grid container spacing={3}>
        {techStack.map((tech, index) => (
          <Grid item xs={6} sm={4} md={3} key={tech.name}>
            <motion.div
              className="tech-item"
              initial={{ rotateY: 0 }}
              whileInView={{
                rotateY: [0, 360],
                transition: {
                  duration: 1.5,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  },
                }}
                onClick={() => handleClickOpen(tech)}
              >
                <Box
                  component="img"
                  src={tech.logo}
                  alt={tech.name}
                  sx={{
                    width: 64,
                    height: 64,
                    mb: 1,
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Typography variant="subtitle1">{tech.name}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        {selectedTech && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={selectedTech.logo}
                  alt={selectedTech.name}
                  sx={{ width: 40, height: 40 }}
                />
                {selectedTech.name}
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography>{selectedTech.description}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default TechStack;