import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Home = () => {
  return (
    <Container className="about-us">
      <Row>
        <Col className="d-none d-sm-block">
          <div className="about-us-image"></div>
        </Col>

        <Col sm={12} md={6} lg={6}>
          <Container>
            <Row>
              <Col>
                <div className="about-us-title">About Us</div>
              </Col>
            </Row>

            <Row>
              <div className="event-para">
                We are an event management company called “CONFEX”. We have been
                a recognised force from the past 6 years in the industry and
                based out of Hyderabad. We provide End-to-end solutions and
                integrated range of services to our valuable customers. Working
                with a team of young, dynamic, enthusiastic, and creative
                professionals, we are recognised as one of the best solution
                providers in the industry. As we Offers original and exciting
                entertainment options to match event image and design. We are
                well known as "One stop shop " for a wide spectrum of event
                requirements and expertise in Brand Activation, Corporate
                Events, Exhibitions, Conferences/Seminars, and Fashion Shows.
              </div>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <br />
        <br /> <br />
      </Row>

      <Row className="why-us">
        <Col>
          <Container>
            <Row>
              <Col>
                <div className="about-us-title">Why Us?</div>
              </Col>
            </Row>

            <Row>
              <div className="event-para">
                1. Individuals and businesses can use TREXPO to display their
                properties, projects, and services to a vast and diversified
                audience. It enables developers, agents, and brokers to display
                their offerings in an immersive and dynamic environment,
                allowing potential buyers and investors to directly explore
                various choices. This face-to-face encounter fosters trust,
                relationships, and effective communication, all of which are
                critical in the real estate profession. <br />
                <br />
                2. TREXPO serves as a knowledge hub, delivering vital insights
                into the latest real estate trends, market dynamics, and
                emerging technology. Expert panel discussions, seminars, and
                workshops are frequently featured, in which industry leaders and
                professionals share their insights and experiences. This
                knowledge exchange allows guests to keep current and make
                informed decisions about their real estate investments. <br />
                <br />
                3. TREXPO foster networking opportunities. They bring together
                people from many industries, including developers, architects,
                contractors, financiers, and investors. This convergence of
                varied talents and experience fosters collaborations,
                partnerships, and corporate growth. It enables participants to
                network, exchange ideas, and explore potential synergies, all of
                which can lead to future collaborations and mutual growth.{" "}
                <br />
                <br />
                4. (OR) The economic progress of the host city or region is
                aided by TREXPO. They draw a great number of visitors, both
                domestic and foreign, who contribute to the local economy by
                spending money on lodging, food, transportation, and other
                services. Furthermore, the publicity generated by these events
                frequently leads to increased interest and investment in the
                local real estate market, resulting in higher property sales,
                construction projects, and job creation.
              </div>
            </Row>
          </Container>
        </Col>

        <Col className="d-none d-sm-block">
          <Container>
            <Row>
              <Col>
                <div className="why-us-image1"></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="why-us-image2"></div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
