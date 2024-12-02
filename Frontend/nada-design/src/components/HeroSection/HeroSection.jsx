// src/components/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.css';
import heroVideo from '../../assets/Video.mp4'; // Adjust path if absolute imports are used
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">#{t('home.play-fair')}</div>

    
      
      <div className="hero-content">
        <p>{t('home.introduction')}</p>
        <p>{t('home.key_areas')}</p>

      </div>
    </div>
  );
};

export default HeroSection;
