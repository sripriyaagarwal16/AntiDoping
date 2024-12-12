import React, { useState } from "react";
import "./health.css";

const Health= () => {
  // Hardcoded recommendations
  const recommendations = {
    sports: {
      soccer: [
        { name: "Parivrtta Trikonasana", modelUrl: "https://sketchfab.com/models/7c37c060b695426f8034fc034330ddee/embed" },
      ],
      basketball: [
        { name: "Vrksasana", modelUrl: "https://sketchfab.com/models/example-model-url/embed" },
      ],
    },
    injuries: {
      backPain: [
        { name: "Balasana", modelUrl: "https://sketchfab.com/models/example-model-url/embed" },
      ],
      kneePain: [
        { name: "Setu Bandhasana", modelUrl: "https://sketchfab.com/models/example-model-url/embed" },
      ],
    },
  };

  // State for dropdown selections
  const [category, setCategory] = useState(""); // "sports" or "injuries"
  const [selectedOption, setSelectedOption] = useState("");
  const [poses, setPoses] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSelectedOption("");
    setPoses([]);
  };

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    if (category && recommendations[category][option]) {
      setPoses(recommendations[category][option]);
    } else {
      setPoses([]);
    }
  };

  return (
    <div className="health-container">
      <h1 className="header">Yoga Pose Recommendation System</h1>

      <div className="dropdown-container">
        {/* Category Dropdown */}
        <label className="dropdown-label">
          Select Category:
          <select className="dropdown" value={category} onChange={handleCategoryChange}>
            <option value="">--Choose a Category--</option>
            <option value="sports">Sports</option>
            <option value="injuries">Physical Injuries</option>
          </select>
        </label>

        {/* Options Dropdown */}
        {category && (
          <label className="dropdown-label">
            Select {category === "sports" ? "Sport" : "Injury"}:
            <select className="dropdown" value={selectedOption} onChange={handleOptionChange}>
              <option value="">--Choose an Option--</option>
              {Object.keys(recommendations[category]).map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      {/* Recommendations */}
      {poses.length > 0 && (
        <div className="recommendations">
          <h2 className="recommendations-header">Recommended Yoga Poses:</h2>
          {poses.map((pose, index) => (
            <div key={index} className="pose-container">
              <h3 className="pose-title">{pose.name}</h3>
              <div className="sketchfab-embed-wrapper">
              <iframe
               title={pose.name}
               frameBorder="0"
               allowFullScreen
               mozallowfullscreen="true"
               webkitallowfullscreen="true"
               allow="autoplay; fullscreen; xr-spatial-tracking"
               src={`${pose.modelUrl}?embed=1&autostart=1&hide_controls=1&disable_info=1&disable_logo=1&background_color=000000`}
               className="pose-iframe"
/>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Health;
