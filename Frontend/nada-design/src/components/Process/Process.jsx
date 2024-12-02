import React from "react";
import "./Process.css";
import { useTranslation } from 'react-i18next';

import computers from "../../assets/Computers.png"
const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
        title: t('About Us.global_collaboration'),
        description:
        t('About Us.partnering_with_organizations'),
        icon: "🌍",
      },
      {
        title: t('About Us.advancing_research'),
        description:
        t('About Us.innovative_research'),
        icon: "📈",
      },
      {
        title: t('About Us.athlete_education'),
        description:
        t('About Us.organizing_workshops'),
        icon: "📚",
      },
      {
        title: t('About Us.strengthening_testing'),
        description:
        t('About Us.expanding_testing_measures'),
         icon: "🔍",
      },
      {
        title:t('About Us.data_driven'),
        description:
        t('About Us.using_data_analytics'),     
         icon: "📊",
      },
  ];

  return (
    <div className="process-container">
      <div className="process-left">
        <h1>{t('About Us.collaborations_heading')}</h1>
        <p>
        {t('About Us.collaborations')}
        </p>
       
        <img
          src={computers} // Replace with actual image URL
          alt="Teamwork"
          className="process-image"
        />
      </div>
      <div className="process-right">
        {steps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="process-icon">{step.icon}</div>
            <div className="process-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
