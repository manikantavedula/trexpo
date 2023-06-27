import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./style.css";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer footer-center">
      <div className="footer-items">
        <i>
          <EmailIcon />
        </i>
        <p>info@trexpo.in</p>
      </div>
      <div className="footer-items">
        <i>
          <CallIcon />
        </i>
        <p>+91 **********</p>
      </div>
      <div className="footer-items">
        <i>
          <InstagramIcon />
        </i>
        <p>trexpo</p>
      </div>
    </footer>
  );
}

export default Footer;
