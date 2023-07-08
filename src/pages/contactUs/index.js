import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/image.png";
import event from "../../assets/images/image-030.jpg";
import "./style.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="container-fluid event-query">
        <div className="event-img"></div>
      </div>

      <div className="container-fluid marketing-query">
        <div className="marketing-img"></div>
        <div className="d-none d-sm-none d-md-block marketing-person-img"></div>
        <div className="d-block d-sm-block d-md-none marketing-person-img-1"></div>
      </div>

      <Container>
        <Row className="align-items-end contact-us-details">
          <Col md={6}>
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
                    <span>Event Enquiries:</span> Vaishali (+91 9030002078)
                  </div>

                  <div>
                    <span>Marketing Enquiries:</span> Sona (+91 9014599465)
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

          <Col md={6} style={{ textAlign: "right" }}>
            <img src={logo} alt="Logo" width={"100%"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactUs;
