import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUS";
import Register from "./pages/register";
import EventDetails from "./pages/eventDetails";
import ContactUs from "./pages/contactUs";
import Footer from "./components/footer";

const FooterWithLocation = () => {
  const location = useLocation();

  return location.pathname !== "/contact-us" ? <Footer /> : null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".dom-loading");
      if (el) {
        el.remove(); // removing the spinner element
        setLoading(false); // showing the app
      }
    });
  }, []);

  const fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 3500));
  };

  if (loading) {
    return null; //app is not ready (fake request is in process)
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <FooterWithLocation />
    </Router>
  );
};

export default App;
