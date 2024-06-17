// src/components/Footer.jsx
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        width: "100%",
        mt: "auto", // Allow footer to be pushed to the bottom
      }}
    >
      <Typography variant="body2">
        © 2024 SmartCrew. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Connect with us:
      </Typography>
      <Box mt={2}>
        <IconButton aria-label="Facebook" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="Twitter" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="LinkedIn" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="Instagram" color="inherit">
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        For support, Contact: abhinob9@gmail.com
      </Typography>
    </Box>
  );
};

export default Footer;
