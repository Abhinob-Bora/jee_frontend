import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm" style={{ maxHeight: '90vh', overflow: 'auto', padding: '1rem' }}>
      <Card elevation={6} style={{ padding: '2rem', borderRadius: '15px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', textAlign: 'center', color: '#3f51b5' }}>
            Thank You for Booking!
          </Typography>
          <Typography variant="h5" gutterBottom style={{ textAlign: 'center', color: '#4caf50', marginBottom: '2rem' }}>
            Hi Aspirant,
          </Typography>
          <Box my={3}>
            <Typography variant="body1" style={{ textAlign: 'center', color: '#757575' }}>
              Your 1-1 mentorship session is now under progress. You will receive a call within 10 minutes to schedule your meeting.
            </Typography>
          </Box>
          <Box my={3}>
            <Typography variant="body1" style={{ textAlign: 'center', color: '#757575' }}>
              If you have a valid coupon code, you'll get a cash refund after applying it.
            </Typography>
          </Box>
          <Box my={3}>
            <Typography variant="body1" style={{ textAlign: 'center', color: '#757575' }}>
              For further queries or assistance, please contact us at <a href="mailto:abhinob9@gmail.com" style={{ color: '#3f51b5' }}>abhinob9@gmail.com</a>.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ConfirmationPage;
