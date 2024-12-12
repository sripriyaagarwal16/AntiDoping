import React from "react";
import "./linkforancient.css";
import { Link } from "react-router-dom"; 

// Replace with actual paths to your images
const images = {
  training: "https://www.verywellfit.com/thmb/fVuBqwuJkhe4RF0fMGiODHLTkSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/nutritious-diet-0db62a9bfb174696a386f57ff5fd146d.jpg",
  timeline: "https://cdn.britannica.com/43/198043-050-06FA423B/events-Infographic-athletes-Olympic-Games-pankration-pentathlon.jpg",
  stories: "https://miro.medium.com/v2/resize:fit:1400/1*tfcalujqs05Ht5h0ppW5cQ.jpeg",
  doping: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGR1-ARNNz65R6wy0PBnlJTTT1E00vtOJmg&s",
};

const Linkforancient = () => {
  const features = [
    {
      title: "Training and Diet Practices",
      image: images.training,
      description: "Learn about the traditional training and diet practices of ancient Indian athletes.",
      link: "/trainingdiet"
    },
    {
      title: "Sports and Ethics Timeline",
      image: images.timeline,
      description: "Explore the history of sports and ethical practices in ancient India.",
      link: "/timeline"
    },
    {
      title: "Inspirational Stories from past",
      image: images.stories,
      description: "Get inspired by the legendary athletes and their feats in ancient times.",
      link: "/inspiration"
    },
    {
      title: "Anti-Doping Values and rules",
      image: images.doping,
      description: "Understand the anti-doping values rooted in ancient Indian sports ethics.",
      link: "/antidoping"
    },
  ];

  return (
    <div className="ancientpage">
      <h1>Discover the Journey</h1>
      <div className="features-container">
        {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="feature-link">
          <div className="feature-card" key={index}>
            <div className="image-container">
              <img src={feature.image} alt={feature.title} className="feature-image" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Linkforancient;
