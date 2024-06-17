import React, { useState } from "react";
import qr from "../Images/QR_Gpay.jpg";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MentorshipBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    modeOfSession: "",
    sessionType: "",
    currentYear: "",
    couponCode: "",
    question: "",
    agree: false,
  });
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleConfirm = async () => {
    const {
      name,
      email,
      phone,
      modeOfSession,
      sessionType,
      currentYear,
      question,
      agree,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !modeOfSession ||
      !sessionType ||
      !currentYear ||
      !question ||
      !agree
    ) {
      setErrorMessage(
        "Please fill out all required fields and agree to the terms."
      );
      setShowError(true);
      return;
    }

    try {
      const response = await fetch("https://jee-backend.onrender.com/api/mentor/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/mentor/confirmation");
      } else {
        const result = await response.json();
        setErrorMessage(result.message || "Failed to submit the form.");
        setShowError(true);
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
      setShowError(true);
    }
  };

  return (
    <div
      style={{ background: "darksilver", height: "100vh", overflow: "auto" }}
    >
      <Container maxWidth="sm" style={{ padding: "1rem" }}>
        <Card
          elevation={6}
          style={{ padding: "1rem", borderRadius: "15px", background: "white" }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#3f51b5",
                marginBottom: "1.5rem", // Add some bottom margin for spacing
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Add text shadow for depth
              }}
            >
              Book your slot
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                margin="dense"
                label="Name"
                name="name"
                placeholder="What's your name?"
                variant="outlined"
                size="small"
                style={{
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  background: "lightgrey",
                }}
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Email"
                name="email"
                placeholder="What's your email?"
                variant="outlined"
                size="small"
                style={{
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  background: "lightgrey",
                }}
                required
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Phone"
                name="phone"
                placeholder="What's your phone?"
                variant="outlined"
                size="small"
                style={{
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  background: "lightgrey",
                }}
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                style={{ marginBottom: "1rem", background: "lightgrey" }}
                required
              >
                <InputLabel>Mode of session</InputLabel>
                <Select
                  label="Mode of session"
                  name="modeOfSession"
                  style={{ borderRadius: "8px" }}
                  value={formData.modeOfSession}
                  onChange={handleChange}
                >
                  <MenuItem value="online">Online</MenuItem>
                  <MenuItem value="offline">Offline</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                style={{ marginBottom: "1rem", background: "lightgrey" }}
                required
              >
                <InputLabel>Session Type</InputLabel>
                <Select
                  label="Session Type"
                  name="sessionType"
                  style={{ borderRadius: "8px" }}
                  value={formData.sessionType}
                  onChange={handleChange}
                >
                  <MenuItem value="video">Video Call</MenuItem>
                  <MenuItem value="audio">Audio Call</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                size="small"
                style={{ marginBottom: "1rem", background: "lightgrey" }}
                required
              >
                <InputLabel>Current Year</InputLabel>
                <Select
                  label="Current Year"
                  name="currentYear"
                  style={{ borderRadius: "8px" }}
                  value={formData.currentYear}
                  onChange={handleChange}
                >
                  <MenuItem value="11th">11th</MenuItem>
                  <MenuItem value="12th">12th</MenuItem>
                  <MenuItem value="dropper">Dropper</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="dense"
                label="Coupon Code (if any)"
                name="couponCode"
                placeholder="COUPON CODE (IF ANY)"
                variant="outlined"
                size="small"
                style={{
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  background: "lightgrey",
                }}
                value={formData.couponCode}
                onChange={handleChange}
              />
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontWeight: "bold", color: "#4caf50" }}
              >
                Amount payable: ₹ 149
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                style={{ marginBottom: "1rem" }}
              >
                <img
                  src={qr}
                  alt="QR Code for Payment"
                  style={{ width: "300px", height: "300px" }} // Increased size
                />
              </Box>
              <TextField
                fullWidth
                margin="dense"
                label="What do you want to ask your mentor?"
                name="question"
                placeholder="I want to discuss about ...."
                variant="outlined"
                multiline
                rows={4}
                size="small"
                style={{
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  background: "lightgrey",
                }}
                required
                value={formData.question}
                onChange={handleChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                }
                label="By proceeding you agree to SmartCrew's terms of service and privacy policy."
                style={{ marginTop: "0.5rem" }}
              />
              <Grid container justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "1rem",
                    borderRadius: "8px",
                    padding: "0.5rem 2rem",
                    background: "#3f51b5",
                  }}
                  onClick={handleConfirm}
                >
                  Confirm
                </Button>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
      >
        <Alert onClose={() => setShowError(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MentorshipBooking;
