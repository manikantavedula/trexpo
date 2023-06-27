import React from "react";
import Title from "../../components/title";
import HomeEvent from "../../components/homeEvent";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Title />
      <HomeEvent />
    </div>
  );
};
export default Home;
