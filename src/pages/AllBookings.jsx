import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const token = localStorage.getItem("podstreamtoken");

  useEffect(() => {
    const fetchBookings = async () => {
      if (!currentUser || currentUser.userType !== 'admin') {
        navigate('/'); // Redirect to home if not an admin
        return;
      }

      try {
        const res = await axios.get('https://jee-backend.onrender.com/api/mentor/bal', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, [currentUser, navigate]);

  const shareBooking = (booking) => {
    const text = `Name: ${booking.name}\nEmail: ${booking.email}\nMode of Session: ${booking.modeOfSession}\nCurrent Year: ${booking.currentYear}\nQuestion: ${booking.question}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <Container sx={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#4caf50', textAlign: 'center' }}>All Bookings</Typography>
      {bookings.length === 0 ? (
        <Typography variant="body1" sx={{ color: '#fff' }}>No bookings available</Typography>
      ) : (
        <Grid container spacing={3}>
          {bookings.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking._id}>
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#1c1c1c', color: '#fff', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>{booking.name}</Typography>
                <Typography variant="body2">Email: {booking.email}</Typography>
                <Typography variant="body2">Phone: {booking.phone}</Typography>
                <Typography variant="body2">Mode of Session: {booking.modeOfSession}</Typography>
                <Typography variant="body2">Current Year: {booking.currentYear}</Typography>
                <Typography variant="body2">Question: {booking.question}</Typography>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<ShareIcon />}
                  sx={{ marginTop: 1 }}
                  onClick={() => shareBooking(booking)}
                >
                  Share on WhatsApp
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default AllBookings;
