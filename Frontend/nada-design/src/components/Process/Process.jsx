import React from "react";
import "./Process.css";

import computers from "../../assets/Computers.png"
const Process = () => {
  const steps = [
    {
        title: "Global Collaboration",
        description:
          "Partnering with global organizations such as WADA and INADO to align with international anti-doping standards.",
        icon: "🌍",
      },
      {
        title: " Advancing Research",
        description:
          "Engaging in innovative research to develop more efficient testing methods and anti-doping techniques.",
        icon: "📈",
      },
      {
        title: "Athlete Education Programs",
        description:
          "Organizing workshops, webinars, and campaigns to educate athletes, coaches, and sports personnel on banned substances and fair play principles.",
        icon: "📚",
      },
      {
        title: " Strengthening Testing Protocols",
        description:
          "Expanding testing measures with state-of-the-art facilities and ensuring compliance with global standards.",
        icon: "🔍",
      },
      {
        title: " Data-Driven Strategies",
        description:
          "Using advanced data analytics and intelligence to identify doping trends and prevent violations effectively.",
        icon: "📊",
      },
  ];

  return (
    <div className="process-container">
      <div className="process-left">
        <h1> COLLABORATIONS</h1>
        <p>
        ADA India collaborates closely with both national and international stakeholders to uphold clean sport practices, sharing anti-doping resources and enhancing collective efforts for fair play. Our partnerships with WADA, INADO, AIU, ITA, RADO, and NADO offer a solid foundation for innovation, research, and advancement in anti-doping efforts.
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
