import React, { useState } from "react";
import "./Howtodoitsection.css";

const Howtodoitsection = ({ heading, text, buttonLabel, image, layout = "image-left" }) => {
  const [isPoppedUp, setIsPoppedUp] = useState(false);

  const handleSectionClick = () => {
    setIsPoppedUp(!isPoppedUp);
  };

  return (
    <section
      className={`howtodoit-section ${layout === "image-left" ? "image-left" : "image-right"} ${
        isPoppedUp ? "popped-up" : ""
      }`}
      id="howtodoit-section"
      onClick={handleSectionClick} // Add click handler to toggle pop-up
    >
      {layout === "image-left" ? (
        <>
          <div className="steps">
            <img src={image} alt={`${heading} visual`} style={{ width: "450px", height: "auto", borderRadius: "8px" }} />
          </div>
          <div className="process">
            <h2>{heading}</h2>
            <p>{text}</p>
            <button>{buttonLabel}</button>
          </div>
        </>
      ) : (
        <>
          <div className="process">
            <h2>{heading}</h2>
            <p>{text}</p>
            <button>{buttonLabel}</button>
          </div>
          <div className="steps">
            <img src={image} alt={`${heading} visual`} style={{ width: "460px", height: "auto", borderRadius: "8px" }} />
          </div>
        </>
      )}
    </section>
  );
};

export default Howtodoitsection;
