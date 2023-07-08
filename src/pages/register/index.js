import React from "react";
import layout from "../../assets/images/layout.jpeg";
import "./index.css";

const Home = () => {
  return (
    <div className="register-page">
      <div className="image-section">
        <div className="layout-title">Layout: </div>
        <img src={layout} alt="layout" width={"100%"} />
      </div>
    </div>
  );
};
export default Home;
