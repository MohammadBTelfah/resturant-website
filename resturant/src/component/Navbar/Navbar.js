import React, { useState } from "react";
import clogo from '../assesst/clogo.png';
import { AppBar, Toolbar, Button, IconButton, Typography, Badge, Box, Menu, MenuItem, useMediaQuery, useTheme, Container, Drawer } from "@mui/material";
import { styled } from "@mui/system";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // Import useNavigate


const StyledAppBar = styled(AppBar)({
  backgroundColor: "#ffffff",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  minHeight: "64px"
});

const NavLink = styled(Typography)({
  color: "#000000",
  margin: "0 15px",
  fontSize: "16px",
  cursor: "pointer",
  position: "relative",
  transition: "color 0.3s ease",
  textDecoration: "none",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-4px",
    left: "0",
    backgroundColor: "#FF6B00",
    transition: "width 0.3s ease-in-out"
  },
  "&:hover": {
    color: "#FF6B00"
  },
  "&:hover:after": {
    width: "100%"
  }
});

const OrderButton = styled(Button)({
  backgroundColor: "#FF6B00",
  color: "#ffffff",
  padding: "8px 16px",
  fontSize: "14px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#E65100"
  }
});

const CartDrawer = styled(Box)({
  width: 320,
  padding: "20px",
  backgroundColor: "#ffffff"
});

export default function Navbar() {
  const navigate = useNavigate();  // Initialize navigation
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState(0); // Change to a dynamic value if needed
  const [cartOpen, setCartOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "Home", id: "home", path: "/" },
    { title: "Menu", id: "menu", path: "/menu" },
    { title: "About Us", id: "about", path: "/about-us" },
    { title: "Contact Us", id: "contact", path: "/contactus" }
  ];

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);
  const handleCheckout = () => {
    navigate("/checkout");  // Navigate to the checkout page
  };
  
  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={clogo} alt="Restaurant Logo" style={{ width: "90px", height: "auto" }} loading="lazy" />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "center" }}>
              {navLinks.map((link) => (
                <NavLink key={link.id} component="a" href={link.path}>
                  {link.title}
                </NavLink>
              ))}
            </Box>
          )}

          {/* Order & Cart Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <OrderButton href="/menu" variant="contained">Order Now</OrderButton>

            {/* Cart Icon */}
            <IconButton sx={{ color: "#000000" }} onClick={handleCartOpen}>
              <Badge badgeContent={cartItems} color="error">
                <FaShoppingCart size={20} />
              </Badge>
            </IconButton>

            {/* Mobile Menu Icon */}
            {isMobile && (
              <>
                <IconButton onClick={handleMenuOpen} sx={{ color: "#000000" }}>
                  <FaBars size={22} />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  {navLinks.map((link) => (
                    <MenuItem key={link.id} onClick={handleMenuClose} component="a" href={link.path}>
                      {link.title}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Shopping Cart Drawer */}
      <Drawer anchor="right" open={cartOpen} onClose={handleCartClose}>
        <CartDrawer>
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6">Shopping Cart</Typography>
            <IconButton onClick={handleCartClose}>
              <FaTimes size={20} />
            </IconButton>
          </Box>

          {cartItems > 0 ? (
            <>
              <Typography>You have {cartItems} items in your cart.</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: "100%", backgroundColor: "#FF6B00", "&:hover": { backgroundColor: "#E65100" } }}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </>
          ) : (
            <Typography>Your cart is empty</Typography>
          )}
        </CartDrawer>
      </Drawer>
    </StyledAppBar>
  );
}
