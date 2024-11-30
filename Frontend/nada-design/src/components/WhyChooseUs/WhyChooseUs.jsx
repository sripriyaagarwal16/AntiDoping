import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      title: " Substance Testing",
      description:
        "Testing athletes for prohibited substances.",
      icon: "🧪",
    },
    {
      title: " Doping Awareness",
      description:
        "Educating athletes about banned substances.",
      icon: "📚",
    },
    {
      title: "Violation Investigations",
      description:
        "Investigating doping violations.",
      icon: "🔍",
    },
    {
      title: "Rule Enforcement",
      description:
        "Enforcing anti-doping rules.",
      icon: "⚖️",
    },
  ];

  return (
    <div className="why-choose-us">
      <h1>WHAT WE DO</h1>
      <p>
      We focus on promoting fair competition by preventing the use of performance-enhancing drugs in sports. Key activities include:
      </p>
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
