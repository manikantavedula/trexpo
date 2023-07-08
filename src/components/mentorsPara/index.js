import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IconCrown } from "@tabler/icons-react";
import mentor from "../../assets/images/image-001.jpg";
import mentor1 from "../../assets/images/mentor1.jpeg";
import mentor2 from "../../assets/images/mentor2.jpeg";
import mentor3 from "../../assets/images/mentor3.jpg";
import mentor4 from "../../assets/images/mentor4.jpg";
import "./style.css";

function MentorsPara() {
  return (
    <div className="container-fluid mentors-para">
      <Row>
        <Col sm={12} md={12} lg={6}>
          <div className="container-fluid">
            <Row>
              <Col>
                <div className="mentors-para-crown">
                  <IconCrown />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="mentors-para-crown-text">Mr.xyz</div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="mentors-para-title">
                  WHAT OUR MENTOR SAYS...
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="d-block d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="mentors-image-1">
                  <img src={mentor4} alt="Mentor" />
                </div>
              </Col>
            </Row>

            <Row className="justify-center">
              <Col md={12} sm={12} xs={12}>
                <div className="event-para">
                  This event a highly anticipated event in the industry which
                  brings together professionals, investors, and enthusiasts from
                  in and around south India to explore the latest trends and
                  developments in the real estate market. This is also a “First
                  ever tech savy event”, where we show case latest technology
                  trends that helps in the growth of real estate market. <br />
                  <br />
                  This dynamic expo serves as a hub for networking,
                  knowledge-sharing, and showcasing innovative projects.
                  Attendees have the opportunity to engage with renowned experts
                  who deliver insightful talks, and workshops, providing
                  valuable insights into the ever-evolving landscape of the real
                  estate industry. Exhibitors, including leading developers,
                  brokers, and financial institutions, present their most
                  exceptional properties and investment opportunities, offering
                  attendees a comprehensive view of the market. <br />
                  <br />
                  From residential to commercial properties, from traditional to
                  sustainable projects, Our Expo offers a diverse range of
                  options for potential buyers, investors, and industry
                  professionals looking to stay ahead of the curve. With its
                  vibrant atmosphere and extensive range of resources, the Real
                  Estate Expo has firmly established itself as a premier event
                  that shapes the future of the real estate industry. Apart from
                  the real estate opportunities we are focused on fashion, music
                  and many more attractions.
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col className="d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
          <div className="mentors-image">
            <img src={mentor4} alt="Mentor" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MentorsPara;
