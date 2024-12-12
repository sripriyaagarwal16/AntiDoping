import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./analystslider.css";
import { useNavigate } from "react-router-dom";


const AnalystSlider = () => {
  const [slides, setSlides] = useState([
    {
        name: "John Smith",
        description: "Financial Analyst",
        Age: "Age: 29",
        image: "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
      },
      {
        name: "Jane Doe",
        description: "Travel Analyst",
        Age: "Age: 34",
        image: "https://r2.erweima.ai/imgcompressed/img/compressed_76de67f98bfc53fcd9b24bb30a8074de.webp",
      },
      {
        name: "Michael Johnson",
        description: "Social Media Analyst",
        Age: "Age: 27",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZy870wAoiSEmUdqhX6Pk40UyWTKG6I7cAHdcn70qoLyHJ93eVNGyX_Xp-AfGnU3H4upo&usqp=CAU",
      },
      {
        name: "Emily Davis",
        description: "ABP Analyst",
        Age: "Age: 31",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFlrAvgLy3qR4skw6BwX5gKYsDZoSGLSwvA&s",
      },
  ]);
  
  const navigate = useNavigate();

  const handleNext = () => {
    setSlides((prevSlides) => [...prevSlides.slice(1), prevSlides[0]]);
  };

  const handlePrev = () => {
    setSlides((prevSlides) => [prevSlides[prevSlides.length - 1], ...prevSlides.slice(0, -1)]);
  };

  return (
    <div className="analyst-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div key={index} className={`items`} style={{ backgroundImage: `url(${slide.image})` }}>
            {index === 1 && (
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <div className="age">{slide.Age}</div>
                <button
                  className="b"
                  onClick={() => navigate('/progress')}
                >
                  Check Progress Log
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="but">
  <button className="prev" onClick={handlePrev}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
  <button className="next" onClick={handleNext}>
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>
    </div>
  );
};

export default AnalystSlider;
