import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ slide }) => {
  return (
    <div
      className="slide w-[100vw] h-[100%] bg-center bg-no-repeat bg-cover  lg:px-10 xl:px-0"
      style={{
        backgroundImage: `url(${slide.src})`,
      }}
    >
      <div className="slide-text container mx-auto text-violet-50 flex flex-col items-center lg:items-start justify-center h-full gap-5">
        <h1 className="text-2xl md:text-5xl lg:text-7xl w-4/5 font-bold uppercase space-font">
          {slide.headline}
        </h1>
        <p className="w-4/5 lg:w-3/5 text-center lg:text-start">{slide.body}</p>
        <Link
          to={`./category/${slide.category}`}
          className="slide-btn h-8 w-56 md:h-10  lg:h-14 md:w-72 text-xs md:text-base py-3 px-4 border border-violet-50 hover:text-orange-50 duration-300 relative bg-transparent uppercase font-medium mt-5"
        >
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {slide.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
