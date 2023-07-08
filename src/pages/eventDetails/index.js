import React from "react";
import AboutEvent from "../../components/aboutEvent";
import "./style.css";
import Agenda from "../../components/agenda";

const Home = () => {
  return (
    <div className="event-details">
      <AboutEvent />
      <Agenda />
    </div>
  );
};
export default Home;
