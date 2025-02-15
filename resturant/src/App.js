import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Menu from "./component/menu/Menu";





function App() {
    return (
        <Router>
          <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
          
            <Footer />
        </Router>
    );
}

export default App;
