import React, { useState } from "react";
import Slide from "./Slide";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const data = [
  {
    id: 1,
    src: "https://i.ibb.co/XszmG02/camera.jpg",
    headline: "DSLR cameras for stunning photos",
    body: "Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.",
    cta: "Shop DSLR cameras now",
    category: "Camera",
  },
  {
    id: 2,
    src: "https://i.ibb.co/mtc8v16/tv.jpg",
    headline: "Upgrade your home entertainment with our TVs",
    body: "Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.",
    cta: "Shop TVs and upgrade now",
    category: "TV",
  },
  {
    id: 3,
    src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
    headline: "Enhance your listening experience",
    body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
    cta: "Experience enhanced sound",
    category: "Headphones",
  },
  {
    id: 4,
    src: "https://i.ibb.co/JqxDhvZ/console.jpg",
    headline: "Take your gaming to the next level",
    body: "Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.",
    cta: "Shop consoles and play now",
    category: "Console",
  },
  {
    id: 5,
    src: "https://i.ibb.co/KLhZZWp/smart-watch.jpg",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
    category: "Smart Watches",
  },
];

const Slider = () => {
  const [currrentSlide, setCurrentSlide] = useState(0);

  //prev slide btn handler
  const prevSlide = () => {
    setCurrentSlide(
      currrentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  //next slide btn handler
  const nextSlide = () => {
    setCurrentSlide(
      currrentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-hidden">
      <div
        className="slider w-[500vw] h-[calc(100vh-80px)] flex duration-1000"
        style={{ transform: `translateX(-${100 * currrentSlide}vw)` }}
      >
        {data.map((slide) => (
          <Slide slide={slide} key={slide.id} />
        ))}
      </div>
      <div className="btns w-[90%] lg:w-fit mx-auto absolute z-[1] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  lg:bottom-20 lg:top-[80%] text-white flex gap-10 justify-between items-center text-2xl">
        <button
          className="prev-btn h-8 w-12  lg:h-14 lg:w-20  text-sm lg:text-lg bg-gray-700/50 shadow-sm shadow-black/30 backdrop-blur-sm hover:bg-gray-800/50 flex items-center justify-center hover:text-black/60 duration-300 border border-gray-500"
          onClick={prevSlide}
        >
          <BsArrowLeft />
        </button>
        <button
          className="next-btn h-8 w-12  lg:h-14 lg:w-20  bg-gray-700/50 shadow-sm  text-sm lg:text-lg backdrop-blur-sm hover:bg-gray-800/50 flex items-center justify-center hover:text-black/60 duration-300 border border-gray-500"
          onClick={nextSlide}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
