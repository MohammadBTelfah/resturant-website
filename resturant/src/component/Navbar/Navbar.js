import React from "react";
import { Link } from "react-router-dom";
import clogo from '../../component/assesst/clogo.png';
import { BsCart2 } from "react-icons/bs";

import "./navbar.css";

export default function Navbar() {
    return (
<nav className="navbar">
    <div className="logo">
        <img src={clogo} alt="logo" />
    </div>
    <div className="nav-container">
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="cta">
            <a href="/menu" className="order-now">Order Now</a>
            <div class="icont-cart">
         
            <BsCart2 />


            <span>0</span>
        </div>
        </div>
    </div>
</nav>
    );
}
