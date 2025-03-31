import { useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  TextField,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Admin = () => {
  const theme = useTheme();
  const adminRef = useRef(null);

  useGSAP(() => {
    gsap.from(adminRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box ref={adminRef}>
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
          Admin Dashboard
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Profile Information
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Title"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Bio"
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Update Profile
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Company"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Position"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Duration"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Description"
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Add Experience
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Projects
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Project Title"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Description"
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Technologies"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="GitHub Link"
                  margin="normal"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Add Project
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Certifications
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Certification Name"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Issuer"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Date"
                  margin="normal"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="Credential ID"
                  margin="normal"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Add Certification
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Admin; 