import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Menu from "./component/menu/Menu";
import ContactUs from "./component/Contactus/Contactus";
import AboutUs from "./component/About/about-us";


function App() {
    return (
        
        <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs/>} />                         

            </Routes>
            <Footer />
        </Router>

    );
}

export default App;
