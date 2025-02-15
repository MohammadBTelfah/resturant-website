import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Rating, Accordion, AccordionSummary, AccordionDetails, Container, Card, CardContent, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

const StyledHeroSection = styled(Box)(() => ({
  minHeight: "100vh",
  background: "#000000",
  color: "#FFFFFF",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#FFA500",
  color: "#FFFFFF",
  padding: "1rem 3rem",
  fontSize: "1.2rem",
  marginTop: "2rem",
  "&:hover": {
    backgroundColor: "#FFB733",
    transform: "scale(1.05)",
  },
}));

const SliderContainer = styled(Box)(() => ({
  width: "100%",
  position: "relative",
  marginTop: "4rem",
}));

const burgerImages = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  "https://images.unsplash.com/photo-1586816001966-79b736744398",
  "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7",
  "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"
  
  
];

const testimonials = [
  {
    name: "John Doe",
    quote: "Best burgers I've ever tasted! The quality is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Jane Smith",
    quote: "Amazing atmosphere and incredible service. A must-visit!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We're open daily from 11:00 AM to 10:00 PM",
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have a variety of vegetarian burgers and sides available.",
  },
  {
    question: "Is parking available?",
    answer: "We offer free parking for all our customers in our dedicated lot.",
  },
];

function M0TRestaurant() { 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % burgerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + burgerImages.length) % burgerImages.length);
  };

  return (
    <Box sx={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <StyledHeroSection>
        <Typography variant="h1" sx={{ color: "#FFA500", fontWeight: "bold", mb: 2 }}>
          M0T Burgers
        </Typography>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Crafting Perfect Burgers Since 2010
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Fresh Ingredients | Signature Sauces | Artisanal Buns
        </Typography>
        <StyledButton component={Link} to="/menu" variant="contained">
      Order Now
    </StyledButton>

        <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <SiGoogle size={30} color="#FFA500" />
          <Rating value={4.8} readOnly precision={0.1} sx={{ ml: 1, color: "#FFA500" }} />
          <Typography sx={{ ml: 1 }}>(2,453 reviews)</Typography>
        </Box>
      </StyledHeroSection>

      <SliderContainer>
        <Box sx={{ position: "relative", overflow: "hidden", height: "500px" }}>
          <Box
            component="img"
            src={burgerImages[currentSlide]}
            alt="Burger"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.5s",
            }}
          />
          <IconButton
            onClick={prevSlide}
            sx={{ position: "absolute", left: 20, top: "50%", color: "#FFA500" }}
          >
            <FiChevronLeft size={40} />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{ position: "absolute", right: 20, top: "50%", color: "#FFA500" }}
          >
            <FiChevronRight size={40} />
          </IconButton>
        </Box>
      </SliderContainer>

      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ color: "#FFA500", textAlign: "center", mb: 4 }}>
          What Our Customers Say
        </Typography>
        <Card sx={{ backgroundColor: "#111111", color: "#FFFFFF", mb: 4, position: "relative" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {testimonials[currentTestimonial].quote}
            </Typography>
            <Box
              component="img"
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              sx={{ width: 80, height: 80, borderRadius: "50%", mb: 2 }}
            />
            <Typography color="#FFA500">
              {testimonials[currentTestimonial].name}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                sx={{ color: "#FFA500", mr: 2 }}
              >
                <FiChevronLeft size={24} />
              </IconButton>
              <IconButton
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                sx={{ color: "#FFA500" }}
              >
                <FiChevronRight size={24} />
              </IconButton>
            </Box>
          </CardContent>
        </Card>

        <Typography variant="h3" sx={{ color: "#FFA500", textAlign: "center", mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#111111",
              color: "#FFFFFF",
              mb: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<FiChevronRight color="#FFA500" />}
              sx={{ borderBottom: "1px solid #333" }}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#CCCCCC" }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      <Box sx={{ mt: 8, textAlign: "center", color: "#FFFFFF" }}>
        <Typography variant="h3" sx={{ color: "#FFA500", mb: 4 }}>
          Find Us
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
          <FaMapMarkerAlt size={24} color="#FFA500" />
          <Typography variant="h6" sx={{ ml: 2 }}>
          Irbid Aydoun street Al-Anduls
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
          Open Daily: 11:00 AM - 10:00 PM
        </Typography>
        <Typography variant="body1" sx={{ color: "#CCCCCC", mt: 1 }}>
          Phone: (+962)772572078
        </Typography>
      </Box>
    </Box>
  );
};

export default M0TRestaurant;