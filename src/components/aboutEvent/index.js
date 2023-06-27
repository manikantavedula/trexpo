import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

function HomeEvent() {
  return (
    <Container className="about-event">
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Container>
            <Row>
              <Col>
                <div className="about-event-title">About the Event</div>
              </Col>
            </Row>

            <Row>
              <div className="event-para">
                This event a highly anticipated event in the industry which
                brings together professionals, investors, and enthusiasts from
                in and around south India to explore the latest trends and
                developments in the real estate market. This is also a “First
                ever tech savy event”, where we show case latest technology
                trends that helps in the growth of real estate market. <br />
                This dynamic expo serves as a hub for networking,
                knowledge-sharing, and showcasing innovative projects. Attendees
                have the opportunity to engage with renowned experts who deliver
                insightful talks, and workshops, providing valuable insights
                into the ever-evolving landscape of the real estate industry.
                Exhibitors, including leading developers, brokers, and financial
                institutions, present their most exceptional properties and
                investment opportunities, offering attendees a comprehensive
                view of the market. <br />
                From residential to commercial properties, from traditional to
                sustainable projects, Our Expo offers a diverse range of options
                for potential buyers, investors, and industry professionals
                looking to stay ahead of the curve. With its vibrant atmosphere
                and extensive range of resources, the Real Estate Expo has
                firmly established itself as a premier event that shapes the
                future of the real estate industry. Apart from the real estate
                opportunities we are focused on fashion, music and many more
                attractions.
              </div>
            </Row>
          </Container>
        </Col>

        <Col>
          <div className="event-image"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeEvent;
