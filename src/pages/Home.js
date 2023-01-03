import React from "react";
import Slider from "../Components/Slider";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
