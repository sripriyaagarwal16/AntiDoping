// components/VisionSection.js
import React from "react";
import "./VisionSection.css";
import { useTranslation } from 'react-i18next';

const VisionSection = () => {
  const { t } = useTranslation();

  return (
    <>
    <section className="vision-section">

    </section>
    <div className="fair-game">
        <h2>{t('About Us.heading')}</h2>
      </div>
    </>
    
  );
};

export default VisionSection;
