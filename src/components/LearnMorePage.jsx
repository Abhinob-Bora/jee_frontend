import React from 'react';
import { Container, Typography, Box, CssBaseline, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const LearnMorePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?learning)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflowY: 'auto',  // Allow vertical scrolling
          paddingTop: 3, // Padding top to create gap at the top
          paddingBottom: 3, // Padding bottom to create gap at the bottom
        }}
      >
        <Container maxWidth="md" sx={{ mt: 3, mb: 3 }}>
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
              Learn More About Our JEE Mentorship
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our JEE mentorship program is designed to help you achieve the best results in your JEE exams. Here are some of the key features:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="1-1 Mentorship Sessions" secondary="Personalized guidance and support from experienced mentors." />
              </ListItem>
              <ListItem>
                <ListItemText primary="AI-powered Query Resolution" secondary="Get quick and accurate answers to your academic questions." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Community Support" secondary="Join our Discord channel to interact with peers and mentors." />
              </ListItem>
            </List>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              Our AI prototype will decrease your screen time and will help you throughout the journey because it is trained on previous toppers of different states and preparation. Stay tuned for more updates as we continue to improve our services.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              For any further queries, feel free to reach out to us on our Discord channel or during our 1-1 mentorship sessions or directly email founder at abhinob9@gmail.com
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LearnMorePage;
