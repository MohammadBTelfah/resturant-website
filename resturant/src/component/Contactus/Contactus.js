import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
  Divider
} from "@mui/material";
import { styled } from "@mui/system";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const StyledContainer = styled(Container)({
  backgroundColor: "#000000",
  color: "#ffffff",
  minHeight: "100vh",
  paddingTop: "2rem",
  paddingBottom: "2rem"
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
  backgroundColor: "#121212",
  color: "#ffffff"
}));

const StyledTextField = styled(TextField)({
  marginBottom: "1rem",
  width: "100%",
  "& .MuiInputBase-input": {
    color: "#ffffff"
  },
  "& .MuiInputLabel-root": {
    color: "#ffffff"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff50"
    },
    "&:hover fieldset": {
      borderColor: "#ffffff"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2"
    }
  },
  "& .MuiFormHelperText-root": {
    color: "#ffffff90"
  }
});

const SocialIcon = styled(Box)({
  display: "inline-flex",
  marginRight: "1rem",
  cursor: "pointer",
  "&:hover": {
    color: "#1976d2",
    transform: "translateY(-2px)",
    transition: "all 0.3s ease"
  }
});

const ContactInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
  gap: "1rem"
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const validateForm = () => {
    const newErrors = {};
    if (formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    if (formData.message.length > 500) {
      newErrors.message = "Message must not exceed 500 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success"
        });
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Failed to send message. Please try again.",
          severity: "error"
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom fontWeight="bold" color="primary">
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#ffffff" }}>
            We'd love to hear from you. Please fill out this form and we'll get back to you as soon as possible.
          </Typography>
          
          <StyledPaper elevation={0}>
            <form onSubmit={handleSubmit} noValidate>
              <StyledTextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                required
              />
              <StyledTextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
              <StyledTextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <StyledTextField
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? <CircularProgress size={24} /> : "Send Message"}
              </Button>
            </form>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledPaper elevation={0}>
            <Typography variant="h5" gutterBottom color="primary">
              Contact Information
            </Typography>
            <ContactInfo>
              <FaMapMarkerAlt size={24} />
              <Typography color="#ffffff">Irbid Aydoun street Al-Anduls
</Typography>
            </ContactInfo>
            <ContactInfo>
              <FaPhone size={24} />
              <Typography color="#ffffff">+962772572078</Typography>
            </ContactInfo>
            <ContactInfo>
              <FaEnvelope size={24} />
              <Typography color="#ffffff">telfahm@gmail.com

</Typography>
            </ContactInfo>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom color="#ffffff">
              Follow Us
            </Typography>
            <Box sx={{ mt: 2 }}>
            <SocialIcon>
  <a href="https://www.linkedin.com/in/mohammed-telfah-3ba1a7261/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={24} />
  </a>
</SocialIcon>

<SocialIcon>
  <a href="https://x.com/m7mdte" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={24} />
  </a>
</SocialIcon>

<SocialIcon>
  <a href="https://www.instagram.com/m0_tf/" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={24} />
  </a>
</SocialIcon>

            </Box>
          </StyledPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default ContactForm;