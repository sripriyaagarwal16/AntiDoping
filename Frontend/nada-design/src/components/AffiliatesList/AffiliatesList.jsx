import React from "react";
import "./AffiliatesList.css";

const affiliates = [
  {
    id: 1,
    name: "Kathryn Murphy",
    description: "In eu do do cillum lorem exerci kea dolor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm_vLFJyUv2Yt1bfTH1sddEEpiTLQnmK34Q&s", // Replace with actual image
  },
  {
    id: 2,
    name: "James Harrid",
    description: "Deserunt minim incididunt cillum nostrud.",
    image: "https://imgcdn.stablediffusionweb.com/2024/6/15/b92f8fb9-a225-4975-bd3b-8c7a422dff6a.jpg", // Replace with actual image
  },
  {
    id: 3,
    name: "Elon Melon",
    description: "Tempor labore consectetur minim est consequat.",
    image: "https://images.generated.photos/hduC_c_9RYIUAnQvFf6wh91HGwQ9ch3IceyinaIQcnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc0NzA1LmpwZw.jpg", // Replace with actual image
  },
  {
    id: 4,
    name: "Mia Smith",
    description: "Cupidatat eiusmod tempor labore amet a.",
    image: "https://images.generated.photos/L3QYl2TA5psfZ0fZT0sUGbAfe2f9Zjp13tvNW6UFqHw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDcyMzIzLmpwZw.jpg", // Replace with actual image
  },
  {
    id: 5,
    name: "James Doe",
    description: "Duis excepteur enim enim dolore aliqua.",
    image: "https://thispersonnotexist.org/static/img/Random_female_face_1.jpeg", // Replace with actual image
  },
 
  
];

const AffiliatesBoard = () => {
  return (
    <div className="affiliates-board">
      <h2 className="board-title">Affiliates on board</h2>
      <div className="affiliates-list">
        {affiliates.map((affiliate) => (
          <div key={affiliate.id} className="affiliate-card">
            <img src={affiliate.image} alt={affiliate.name} className="affiliate-image" />
            <div className="affiliate-details">
              <h3 className="affiliate-name">{affiliate.name}</h3>
              <p className="affiliate-description">{affiliate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliatesBoard;
