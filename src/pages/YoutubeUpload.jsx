import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

const YouTubeUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    tags: "",
    category: "podcast",
    youtubeLink: "",
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const token = localStorage.getItem("podstreamtoken");

  const handleUpload = async () => {
    try {
      const response = await fetch("https://jee-backend.onrender.com/api/youtube/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        setFormData({
          name: "",
          desc: "",
          tags: "",
          category: "podcast",
          youtubeLink: "",
        });
        setShowSuccess(true);
      } else {
        throw new Error("Failed to upload video.");
      }
    } catch (error) {
      setErrorMessage("Failed to upload video.");
      setShowError(true);
    }
  };

  return (
    <div
      style={{
        maxHeight: "100vh",
        overflow: "auto",
        backgroundColor: "#000", // Set a dark background to contrast the white text and borders
        padding: "7rem",
      }}
    >
      <Container
        maxWidth="sm"
        style={{
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          backgroundColor: "#222", // Set a dark background for the container as well
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff", // White text color
          }}
        >
          Upload YouTube Video
        </Typography>

        <TextField
          fullWidth
          margin="dense"
          label="Name"
          name="name"
          placeholder="Video name"
          variant="outlined"
          size="small"
          required
          value={formData.name}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: '#fff' }, // White label color
          }}
          InputProps={{
            style: { color: '#fff' }, // White text color
            notchedOutline: { borderColor: '#fff' }, // White border color
          }}
          sx={{
            marginBottom: "1rem",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Description"
          name="desc"
          placeholder="Video description"
          variant="outlined"
          size="small"
          required
          value={formData.desc}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            style: { color: '#fff' },
            notchedOutline: { borderColor: '#fff' },
          }}
          sx={{
            marginBottom: "1rem",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Tags"
          name="tags"
          placeholder="Video tags (comma-separated)"
          variant="outlined"
          size="small"
          value={formData.tags}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            style: { color: '#fff' },
            notchedOutline: { borderColor: '#fff' },
          }}
          sx={{
            marginBottom: "1rem",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="YouTube Link"
          name="youtubeLink"
          placeholder="YouTube video link"
          variant="outlined"
          size="small"
          required
          value={formData.youtubeLink}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            style: { color: '#fff' },
            notchedOutline: { borderColor: '#fff' },
          }}
          sx={{
            marginBottom: "1rem",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: "1rem",
            borderRadius: "8px",
            padding: "0.5rem 2rem",
            color: "#fff", // White text color
            borderColor: "#fff", // White border color
            backgroundColor: "#555", // Dark background color
          }}
          onClick={handleUpload}
        >
          Upload
        </Button>
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
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Video uploaded successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default YouTubeUpload;
