import React, { useState } from "react";
import clogo from '../assesst/clogo.png';
import { AppBar, Toolbar, Button, IconButton, Typography, Badge, Box, Menu, MenuItem, useMediaQuery, useTheme, Container, Drawer } from "@mui/material";
import { styled } from "@mui/system";
import { FaShoppingCart, FaBars } from "react-icons/fa";


const StyledAppBar = styled(AppBar)({
  backgroundColor: "#ffffff",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  minHeight: "56px"
});

const NavLink = styled(Typography)({
  color: "#000000",
  margin: "0 10px",
  fontSize: "14px",
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
});

const OrderButton = styled(Button)({
  backgroundColor: "#FF6B00",
  color: "#ffffff",
  padding: "6px 14px",
  fontSize: "14px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#E65100"
  }
});

const CartDrawer = styled(Box)({
  width: 320,
  padding: "15px",
  backgroundColor: "#ffffff"
});

export default function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems] = useState(0);
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

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", padding: "5px 0" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={clogo} alt="Restaurant Logo" style={{ width: "90px", height: "auto" }} loading="lazy" />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "center" }}>
              {navLinks.map((link) => (
                <NavLink variant="subtitle2" key={link.id} component="a" href={link.path}>
                  {link.title}
                </NavLink>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginLeft: "auto" }}>
            <OrderButton href="/menu" variant="contained">Order Now</OrderButton>
            <IconButton sx={{ color: "#000000" }} onClick={handleCartOpen}>
              <Badge badgeContent={cartItems} color="error">
                <FaShoppingCart />
              </Badge>
            </IconButton>

            {isMobile && (
              <>
                <IconButton onClick={handleMenuOpen} sx={{ color: "#000000" }}>
                  <FaBars />
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

      <Drawer anchor="right" open={cartOpen} onClose={handleCartClose}>
        <CartDrawer>
          <Typography variant="h6" sx={{ mb: 1 }}>Shopping Cart</Typography>
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


