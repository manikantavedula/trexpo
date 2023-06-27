import React from "react";
import logo from "../../assets/images/image.png";
import logo1 from "../../assets/images/logo.png";
import "./style.css";

function Sponsers() {
  return (
    <>
      <p class="marquee">
        <span>
          <img src={logo} alt="Logo" width={85} />
          <img src={logo1} alt="Logo" width={85} />
          &nbsp;
        </span>
      </p>
    </>
  );
}

export default Sponsers;
