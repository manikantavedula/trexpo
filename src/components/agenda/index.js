import React from "react";
import "./style.css";
import { Col, Row } from "react-bootstrap";

function Agenda() {
  return (
    <div className="agenda-section">
      <div className="container-fluid">
        <Row>
          <Col sm={12} md={4}>
            <div className="column column1"></div>
          </Col>
          <Col sm={12} md={4}>
            <div className="column column2"></div>
          </Col>
          <Col sm={12} md={4}>
            <div className="column column3"></div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Agenda;
