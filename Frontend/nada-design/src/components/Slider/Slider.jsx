import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
import { useNavigate } from "react-router-dom";


const Slider = () => {
  const [slides, setSlides] = useState([
    {
      id: "A001001", // Add an id property
      name: "A001001",
      description: "SPRINT",
      Age: "Age:21",
      image: "https://img.freepik.com/free-photo/close-up-athlete-running_23-2150845522.jpg",
    },
    {
      id: "C098665",
      name: "C098665",
      description: "CRICKET",
      Age: "Age:32",
      image: "https://cdn.pixabay.com/photo/2023/09/19/21/18/ai-generated-8263485_1280.jpg",
    },
    {
      id: "D554663",
      name: "D554663",
      description: "BADMINTON",
      Age: "Age:26",
      image: "https://static.vecteezy.com/system/resources/previews/041/876/471/non_2x/ai-generated-female-tennis-player-in-yellow-top-and-orange-headband-free-photo.jpeg",
    },
    {
      id: "A334876",
      name: "A334876",
      description: "SPRINT",
      Age: "Age:28",
      image: "https://images.nightcafe.studio/jobs/KF5SgXqrYe1MRnQryvsl/KF5SgXqrYe1MRnQryvsl--1--u70pi.jpg?tr=w-1600,c-at_max",
    },
    {
      id: "R009887",
      name: "R009887",
      description: "SPRINT",
      Age: "Age:32",
      image: "https://media.licdn.com/dms/image/D4E12AQFjprt14-A0oQ/article-cover_image-shrink_720_1280/0/1697467310224?e=2147483647&v=beta&t=1x9N_d55kynBR_HhzfKCrT2DwD9A9X-iTBLxRrLT6E0",
    },
    {
      id: "W334889",
      name: "W334889",
      description: "SWIMMING",
      Age: "Age:35",
      image: "https://img.freepik.com/premium-photo/man-playing-badminton-indoor-court_36682-316695.jpg",
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
    <div className="container">
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
                  onClick={() => navigate(`/assessment/${slide.id}`)}
                >
                  Doping Risk Assessment
                </button>
                <button
                  className="button"
                  onClick={() => navigate('/comparison')}
                >
                  World Comparison
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

export default Slider;
