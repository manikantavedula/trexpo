import React, { useLayoutEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Sponsers from "../sponsors";
import logo from "../../assets/images/image.png";
import logo1 from "../../assets/images/logo.png";
import "./style.css";

const Header = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Event Details", path: "/event-details" },
    { name: "Register", path: "/register" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  useLayoutEffect(() => {
    console.log(location.pathname);
    if (location.pathname) {
      const index = navItems.findIndex((v, i) => v.path === location.pathname);
      handleNavClick(index);
    }
  }, [location]);

  const handleNavClick = (index) => {
    setSelectedTab(index);
  };

  const handleHeaderHeight = () => {
    setHeaderHeight((prevHeaderHeight) => !prevHeaderHeight);
  };

  return (
    <>
      <Navbar
        bg="#d3dade"
        expand="lg"
        className={`header ${headerHeight && "header-height"}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" width={120} />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={handleHeaderHeight}
          />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              {navItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={item.path}
                  className={selectedTab === index ? "active" : "content"}
                  onClick={() => handleNavClick(index)}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Sponsers />
    </>
  );
};

export default Header;
