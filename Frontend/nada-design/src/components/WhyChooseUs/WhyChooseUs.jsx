import React from "react";
import "./WhyChooseUs.css";
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('About Us.substance_testing'),
      description:
      t('About Us.testing_athletes'),
      icon: "🧪",
    },
    {
      title: t('About Us.doping_awareness'),
      description:
      t('About Us.educating_athletes'),
      icon: "📚",
    },
    {
      title:t('About Us.violation_investigations'),
      description:
      t('About Us.investigating_violations'),
      icon: "🔍",
    },
    {
      title:t('About Us.rule_enforcement'),
      description:
      t('About Us.enforcing_rules'),
      icon: "⚖️",
    },
  ];

  return (
    <div className="why-choose-us">
      <h1>{t('About Us.what_we_do_heading')}</h1>
      <p>
      {t('About Us.what_we_do')}      </p>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
