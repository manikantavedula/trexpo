import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUS";
import Register from "./pages/register";
import EventDetails from "./pages/eventDetails";
import ContactUs from "./pages/contactUs";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
