import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import circle from "../../assets/images/circle.png";
import building from "../../assets/images/building.png";
import building1 from "../../assets/images/building1.png";
import "./style.css";

function Title() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <div id="title">
      <img src={circle} className="circle" alt="Circle" />

      <Container>
        <Row className="justify-content-md-center title-section">
          <Col sm={12} md={6} className="justify-content-md-center tr-expo">
            <div className="title">
              <span>TR </span> EXPO
            </div>
            <div className="subtitle">Telangana Real Estate Expo</div>
          </Col>

          <Col sm={12} md={6}>
            <img className="title-building" src={building1} alt="Building" />
          </Col>
        </Row>
      </Container>

      <div className="register container-fluid">
        <Button className="register-btn" onClick={handleButtonClick}>
          Register
        </Button>

        <div className="arrow-down">
          <KeyboardDoubleArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Title;
