import React from 'react';
import { Container, Typography, Box, Button, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme();

const FullPageAnnouncement = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?technology)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 3,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              p: 4,
              border: '1px solid #ccc',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Exciting News!
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              We're working on the best AI prototype that will handle your queries and doubts to provide the best JEE mentorship in no time.
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can ask our mentors in 1-1 sessions about the upcoming products, join our Discord channel to stay tuned and make friends, and get some extra free mentorship!
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" href="https://discord.com/invite/FnYukJC3" target="_blank" sx={{ mr: 2 }}>
                Join Discord
              </Button>
              <Button variant="outlined" color="primary" component={Link} to="/learn-more">
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FullPageAnnouncement;
