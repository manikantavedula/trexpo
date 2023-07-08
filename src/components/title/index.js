import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import circle from "../../assets/images/circle.png";
import building from "../../assets/images/building.png";
import building2 from "../../assets/images/building2.png";
import "./style.css";

function Title() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <div id="title">
      <img src={circle} className="circle" alt="Circle" />

      <Container className="title-building">
        <Row className="justify-content-md-center title-section d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
          <Col sm={12} md={6} className="justify-content-md-center tr-expo">
            <div className="title">
              <span>TR </span> EXPO
            </div>
            <div className="subtitle">Telangana Real Estate Expo</div>
          </Col>

          <Col sm={12} md={6}>
            <img className="title-building" src={building2} alt="Building" />
          </Col>
        </Row>

        <Row className="empty-title-space">
          <Col>Hello</Col>
        </Row>

        <Row className="justify-content-md-center title-section d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
          <Col sm={12} md={6} className="justify-content-md-center tr-expo">
            <div className="title">
              <span>TR </span> EXPO
            </div>
            <div className="subtitle">Telangana Real Estate Expo</div>
          </Col>
        </Row>

        <Row className="empty-title-space">
          <Col>Hello</Col>
        </Row>

        <Row className="justify-content-md-center title-section d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
          <Col sm={12} md={6}>
            <img className="title-building" src={building2} alt="Building" />
          </Col>
        </Row>

        <Row className="empty-title-space">
          <Col>Hello</Col>
        </Row>

        <Row className="register">
          <Col sm={3}>
            <Button className="register-btn" onClick={handleButtonClick}>
              Register
            </Button>
          </Col>
        </Row>

        {/* <Row className="register">
          <Col>
            <div className="arrow-down">
              <KeyboardDoubleArrowDownIcon />
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Title;
