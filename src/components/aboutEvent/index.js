import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

function HomeEvent() {
  return (
    <div className="container-fluid about-event">
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div className="container-fluid">
            <Row>
              <Col>
                <div className="about-event-title">About the Event</div>
              </Col>
            </Row>

            <Row>
              <Col className="d-xs-block d-sm-block d-md-none">
                <div className="event-image event-image-sm"></div>
              </Col>
            </Row>

            <Row>
              <div className="event-para">
                This event is a highly anticipated event in the industry which
                brings together professionals, investors, and enthusiasts from
                in and around south India to explore the latest trends and
                developments in the real estate market. This is also a “First
                ever tech savy event”, where we showcase latest technology
                trends that helps in the growth of real estate market. <br />{" "}
                <br />
                Trexpo, the dynamic expo serves as a hub for networking,
                knowledge-sharing, and showcasing innovative projects. Attendees
                have the opportunity to engage with renowned experts who deliver
                insightful talks. Exhibitors, including leading developers,
                brokers, and financial institutions, present their most
                exceptional properties and investment opportunities, offering
                attendees a comprehensive view of the market. <br /> <br />
                From residential to commercial properties, from traditional to
                sustainable projects, Our Trexpo offers a diverse range of
                options for potential buyers, investors, and industry
                professionals looking to stay ahead of the curve. With its
                vibrant atmosphere and extensive range of resources, Trexpo the
                Real Estate Expo has firmly established itself as a premier
                event that shapes the future of the real estate industry. Apart
                from the real estate opportunities we are focused on fashion,
                music and many more attractions.
              </div>
            </Row>
          </div>
        </Col>

        <Col>
          <div className="event-image d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block"></div>
        </Col>
      </Row>
    </div>
  );
}

export default HomeEvent;
