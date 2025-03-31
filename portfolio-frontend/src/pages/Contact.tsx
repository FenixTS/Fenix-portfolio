import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Contact Me
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Get in Touch
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Email
                      </Typography>
                      <Typography>email@example.com</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Phone
                      </Typography>
                      <Typography>+1 234 567 8900</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOnIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Location
                      </Typography>
                      <Typography>Chennai, Tamil Nadu</Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Send Message
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        required
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        required
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                          mt: 2,
                          bgcolor: theme.palette.primary.main,
                          '&:hover': {
                            bgcolor: theme.palette.primary.dark,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            {/* Map Section */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 0, overflow: 'hidden' }}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4732819226038!3d13.00702633330442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                  sx={{
                    border: 0,
                    width: '100%',
                    height: '400px',
                    borderRadius: 1,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact; 