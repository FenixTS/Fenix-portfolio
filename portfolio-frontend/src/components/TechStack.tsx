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
    name: 'React',
    logo: '/logos/react.svg',
    description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
  },
  {
    name: 'Node.js',
    logo: '/logos/nodejs.svg',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
  },
  {
    name: 'TypeScript',
    logo: '/logos/typescript.svg',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'MongoDB',
    logo: '/logos/mongodb.svg',
    description: 'A NoSQL database program that uses JSON-like documents with optional schemas.',
  },
  {
    name: 'Express',
    logo: '/logos/express.svg',
    description: 'A minimal and flexible Node.js web application framework.',
  },
  {
    name: 'Material-UI',
    logo: '/logos/material-ui.svg',
    description: 'A comprehensive suite of UI tools implementing Google\'s Material Design.',
  },
  {
    name: 'Docker',
    logo: '/logos/docker.svg',
    description: 'A platform for developing, shipping, and running applications in containers.',
  },
  {
    name: 'Git',
    logo: '/logos/git.svg',
    description: 'A distributed version control system for tracking changes in source code.',
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
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
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      transition: 'filter 0.3s ease-in-out',
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