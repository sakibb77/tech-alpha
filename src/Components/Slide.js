import React from "react";

const Slide = ({ slide }) => {
  return (
    <div
      className="slide w-[100vw] h-[100%] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${slide.src})`,
      }}
    ></div>
  );
};

export default Slide;
