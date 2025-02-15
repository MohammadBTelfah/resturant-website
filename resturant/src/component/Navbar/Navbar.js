import React, { useState } from "react";
import clogo from '../assesst/clogo.png'
import { AppBar, Toolbar, Button, IconButton, Typography, Badge, Box, Menu, MenuItem, useMediaQuery, useTheme, Container, Drawer } from "@mui/material";
import { styled } from "@mui/system";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: "#000000",
  margin: "0 15px",
  cursor: "pointer",
  position: "relative",
  transition: "color 0.3s ease",
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
}));

const OrderButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF6B00",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#E65100"
  }
}));

const CartDrawer = styled(Box)(({ theme }) => ({
  width: 350,
  padding: "20px",
  backgroundColor: "#ffffff"
}));

const RestaurantNavbar = () => {
    const { cart } = useCart();
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "Home", id: "home", path: "/home" },
    { title: "Menu", id: "menu", path: "/menu" },
    { title: "About Us", id: "about", path: "/about-us" },
    { title: "Contact Us", id: "contact", path: "/contactus" }
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", padding: "10px 0" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={clogo}
              alt="Restaurant Logo"
              style={{ width: "120px", height: "auto", objectFit: "contain" }}
              loading="lazy"
            />
          </Box>

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navLinks.map((link) => (
                <NavLink variant="subtitle1" key={link.id} component="a" href={link.path}>
                  {link.title}
                </NavLink>
              ))}
            </Box>
          ) : null}

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <OrderButton href="/menu" variant="contained" aria-label="Order now">
  Order Now
</OrderButton>


            <IconButton
              aria-label="Shopping cart"
              sx={{ color: "#000000" }}
              onClick={handleCartOpen}
            >
              <Badge badgeContent={cartItems} color="error">
                <FaShoppingCart />
              </Badge>
            </IconButton>

            {isMobile && (
              <>
                <IconButton
                  aria-label="Menu"
                  onClick={handleMenuOpen}
                  sx={{ color: "#000000" }}
                >
                  <FaBars />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
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

      <Drawer anchor="right" open={cartOpen} onClose={handleCartClose}>
        <CartDrawer>
          <Typography variant="h6" sx={{ mb: 2 }}>Shopping Cart</Typography>
          {cartItems > 0 ? (
            <Typography>You have {cartItems} items in your cart</Typography>
          ) : (
            <Typography>Your cart is empty</Typography>
          )}
        </CartDrawer>
      </Drawer>
    </StyledAppBar>
  );
};

export default RestaurantNavbar;