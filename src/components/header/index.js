import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Sponsers from "../sponsors";
import logo from "../../assets/images/image.png";
import logo1 from "../../assets/images/logo.png";
import "./style.css";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about-us" },
    { name: "Event", path: "/event-details" },
    { name: "Register", path: "/register" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const handleNavClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Navbar bg="#d3dade" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" width={120} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

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
