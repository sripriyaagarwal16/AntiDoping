import React, { useState } from "react";
import "./Carousel.css";
import { useTranslation } from "react-i18next";
const Carousel = () => {
  const {t} = useTranslation();

  const slides = [
    {
      id: 1,
      title:  t('home.NADAtitle'),
      description:
      t('home.NADAmission')
    },
    {
      id: 2,
      title: "Get Resources",
      description:
        "Find the latest educational materials, athlete support resources, and news about anti-doping regulations.Stay informed and ensure you're following the latest guidelines and rules.",
    },
    {
      id: 3,
      title: "Doping Tests ",
      description:
        "Learn about the testing process, including how samples are collected, tested, and the importance of keeping the sport clean.Understand the science behind anti-doping testing and how athletes can stay prepared.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slide">
          <div className="content">
            <h2>
              <span className="highlight-orange">
                {slides[currentSlide].title.split(" ")[0]}
              </span>{" "}
              <span className="highlight-white">
                {slides[currentSlide].title.split(" ")[1]}
              </span>
            </h2>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
