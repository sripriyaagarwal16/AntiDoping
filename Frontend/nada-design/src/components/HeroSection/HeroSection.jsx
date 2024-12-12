import React from 'react';
import './HeroSection.css';
import heroVideo from '../../assets/Video.mp4'; // Adjust path if needed
import Carousel from '../Carousel/Carousel'; // Import your Carousel component

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Carousel Positioned Over the Video */}
      <div className="hero-overlay">
        <Carousel />
      </div>
    </div>
  );
};

export default HeroSection;
