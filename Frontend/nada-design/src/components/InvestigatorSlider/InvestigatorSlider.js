import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./InvestigatorSlider.css";
import { useNavigate } from "react-router-dom";


const InvestigationSlider = () => {
  const [slides, setSlides] = useState([
    {
        name: "John Smith",
        description: "Investigator",
        Age: "Age: 29",
        image: "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg",
      },
      {
        name: "Jane Doe",
        description: "Investigator",
        Age: "Age: 34",
        image: "https://cdn.pixabay.com/photo/2024/02/13/05/01/ai-generated-8570118_1280.png",
      },
      {
        name: "Michael Johnson",
        description: "Investigator",
        Age: "Age: 27",
        image: "data:image/jpeg;base64,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",
      },
      {
        name: "Emily Davis",
        description:"Investigator",
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

export default InvestigationSlider;
