import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/image.png";
import "./style.css";

const ContactUs = () => {
  return (
    <Container className="contact-us">
      <Row className="align-items-end">
        <Col>
          <Container>
            <Row className="office-address">
              <Col>
                <div>OFFICE ADDRESS</div>
              </Col>
            </Row>
            <Row className="office-address-details">
              <Col>
                <div>
                  G-2, Maharishi House, Road No. 3, Banjara Hills, Hyderabad -
                  500034
                </div>
              </Col>
            </Row>

            <Row className="contact">
              <Col>
                <div>CONTACT</div>
              </Col>
            </Row>
            <Row className="contact-details">
              <Col>
                <div>
                  <span>Event Enquiries:</span> Vaishali (+91 9063214420)
                </div>

                <div>
                  <span>Marketing Enquiries:</span> Sona (+91 9063239465)
                </div>
              </Col>
            </Row>

            <Row className="email-address">
              <Col>
                <div>EMAIL ADDRESS</div>
              </Col>
            </Row>
            <Row className="email-address-details">
              <Col>
                <div>info@trexpo.in</div>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col style={{ textAlign: "right" }}>
          <img src={logo} alt="Logo" width={"300px"} />
        </Col>
      </Row>
    </Container>
  );
};
export default ContactUs;
