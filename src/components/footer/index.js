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
    <footer className="container-fluid footer footer-center">
      <div className="footer-items mail">
        <i>
          <a href="mailto:info@trexpo.in">
            <IconMail />
          </a>
        </i>
        {/* <p>
          <a href="mailto:info@trexpo.in">info@trexpo.in</a>
        </p> */}

        <i>
          <a href="tel:+919030002078">
            <IconPhoneCall />
          </a>
        </i>

        <i>
          <a href="https://instagram.com/trexpo_2023?igshid=MzRlODBiNWFlZA==">
            <IconBrandInstagram />
          </a>
        </i>

        <i>
          <a href="https://www.facebook.com/trexpo2023?mibextid=ZbWKwL">
            <IconBrandFacebook />
          </a>
        </i>

        <i>
          <a href="https://www.linkedin.com/company/trexpo-2023/">
            <IconBrandLinkedin />
          </a>
        </i>
      </div>
      {/* <div className="footer-items call">
        <i>
          <a href="tel:+919063214420">
            <IconPhoneCall />
          </a>
        </i>
        <p>
          <a href="tel:+919063214420">+91 9063214420</a>
        </p>
      </div> */}
      {/* <div className="footer-items">
        <i>
          <IconBrandInstagram />
        </i>

        <i>
          <IconBrandFacebook />
        </i>

        <i>
          <IconBrandLinkedin />
        </i>
      </div> */}
    </footer>
  );
}

export default Footer;
