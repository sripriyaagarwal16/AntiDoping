import React from "react";
import "./Reveal.css";
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

const Reveal = () => {
  const { t } = useTranslation(); 

  return (
    <div className="hero-container">
      {/* Background Image with Blue Overlay */}
      <div className="hero-background" />

      {/* White Circular Shape */}
      <div className="hero-circle">
        <h1 className="hero-title">
        {t('whistleblower.heading')}
        </h1>
        <p className="hero-subtitle">
        {t('whistleblower.share_info_confidentially')}       
        </p>
      </div>
    </div>
  );
};

export default Reveal;
