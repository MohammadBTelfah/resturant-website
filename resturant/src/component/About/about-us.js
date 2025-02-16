import React from "react";
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid, Paper, styled } from "@mui/material";
import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#fff",
  minHeight: "100vh",
  padding: theme.spacing(4)
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.02)"
  }
}));

const chefData = [
  {
    name: "Chef Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548",
    specialty: "Artisanal Burger Crafting",
    bio: "20 years of experience in crafting gourmet burgers. Specializes in fusion flavors."
  },
  {
    name: "Chef Sarah Chen",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
    specialty: "Classic American Burgers",
    bio: "Trained in traditional American cuisine with a modern twist. Known for perfecting the classic cheeseburger."
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1550547660-d9450f859349"
];

const locationUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106669.70899415445!2d35.81749955820313!3d32.55613590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c76916dac0453%3A0x5416e114aa01a40f!2sIrbid!5e0!3m2!1sen!2sjo!4v1659632337707!5w!3h370";

export default function AboutUs() {
  return (
    <StyledContainer maxWidth={false}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "5rem" }, fontWeight: 800, mb: 4 }}>
          M0T
        </Typography>
        <Typography variant="h4" sx={{ color: "#ffa726" }}>
          Where Burger Dreams Come True
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, color: "#ffa726" }}>
          Our Burger Journey
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8, color: "white" }}>
          At M0T, we believe in the artistry of burger crafting. Each burger tells a story of passion, precision, and dedication to culinary excellence. Since our establishment, we've been on a mission to redefine the burger experience, combining traditional techniques with innovative flavors.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, color: "#ffa726" }}>
          Meet Our Chefs
        </Typography>
        <Grid container spacing={4}>
          {chefData.map((chef, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="400"
                  image={chef.image}
                  alt={chef.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {chef.name}
                  </Typography>
                  <Typography variant="subtitle1" color="#ffa726" sx={{ mb: 2 }}>
                    {chef.specialty}
                  </Typography>
                  <Typography variant="body1">
                    {chef.bio}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, color: "#ffa726" }}>
          Our Creations
        </Typography>
        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Typography variant="h3" sx={{ mb: 4, color: "#ffa726" }}>
          Visit Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FaMapMarkerAlt size={24} style={{ marginRight: "1rem" }} />
              <Typography variant="h6">Irbid Aydoun street Al-Anduls</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FaPhone size={24} style={{ marginRight: "1rem" }} />
              <Typography variant="h6">(+962) 772572078</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FaClock size={24} style={{ marginRight: "1rem" }} />
              <Typography variant="h6">Mon-Sun: 11:00 AM - 10:00 PM</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Box sx={{ width: "100%", height: "400px", borderRadius: "8px", overflow: "hidden" }}>
              <iframe
                src={locationUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="M0T Location"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledContainer>
  );
}
