import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import { Facebook, LinkedIn } from "@mui/icons-material";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="footer footer-center">
      <div className="footer-items mail">
        <i>
          <IconMail />
        </i>
        <p>
          <a href="mailto:info@trexpo.in">info@trexpo.in</a>
        </p>
      </div>
      <div className="footer-items call">
        <i>
          <IconPhoneCall />
        </i>
        <p>
          <a href="tel:+919063214420">+91 9063214420</a>
        </p>
      </div>
      <div className="footer-items">
        <i>
          <IconBrandInstagram />
        </i>

        <i>
          <IconBrandFacebook />
        </i>

        <i>
          <IconBrandLinkedin />
        </i>
      </div>
    </footer>
  );
}

export default Footer;
