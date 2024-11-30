// src/components/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.css';
import hero from '../../assets/hero.png'; // Adjust path if absolute imports are used

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={hero} alt="Hero section illustration" className="hero-image" />
      <div className="hero-content">
        <p>
          National Anti Doping Agency, India is an autonomous body under the Ministry of Youth Affairs
          & Sports, Government of India. NADA India implements the anti-doping program in India and
          works towards promoting clean sport practices across the country.
        </p>
        <p>
          The key areas of functioning include Sample Collection, Results Management, Anti-Doping Education, 
          and Research & Investigations. NADA upholds the values of ethics and integrity in sports and is 
          committed to creating a dope-free sporting environment.
        </p>
        {/* <a href="#" className="read-more" onClick={(e) => e.preventDefault()}>
          Read More...
        </a> */}
      </div>
    </div>
  );
};

export default HeroSection;
