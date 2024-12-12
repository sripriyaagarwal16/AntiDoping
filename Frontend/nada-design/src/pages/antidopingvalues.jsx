import React from "react";
import "../components/Antidoping.css";

function Antidoping() {
  return (
    <div className="template-container">
    {/* Header Section */}
    <div className="header-section">
      <h1>Anti-Doping <span>Values and rules</span></h1>
    </div>

    {/* Content Grid */}
    <div className="content-grid">
      {/* Left Column */}
      <div className="left-column">
        <h2>Historical Roots of Fair Play</h2>
        <p>
          In ancient Indian culture, values like fairness, integrity, and discipline were deeply embedded in
          sports and competitions. The Mahabharata and Ramayana often highlighted the importance of ethical 
          conduct over winning at any cost.
        </p>
        <p>
          For example, in one story, an archer focuses on honing his skills through rigorous training rather 
          than resorting to deception. This dedication to fair play mirrors modern anti-doping regulations, 
          which aim to preserve the sanctity of athletic competition.
        </p>
      </div>

      {/* Center Image Section */}
      <div className="image-section">
      <div className="image-placeholder">
        <img src="https://media.licdn.com/dms/image/v2/D4D12AQEx7BwzwPyhRw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673531172007?e=2147483647&v=beta&t=LLYYhJ6mfPQAxRxfAc_najAU6msHEtrRJBlFxhCC5XQ"/>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <h2>Anti-Doping Lessons from Indian Epics</h2>
        <p>
          The concept of "Dharma" (righteousness) guided sportsmanship in ancient times. Victory achieved
          through dishonesty was considered hollow and dishonorable. This aligns with the spirit of 
          modern anti-doping laws, which promote clean competition.
        </p>
        <p>
          A notable example is the story of Bhima in the Mahabharata, who followed the rules of engagement
          even when fighting fierce opponents. Upholding fairness ensured that the results reflected true
          skill and dedication.
        </p>
      </div>
    </div>

    {/* Additional Image and Content Section */}
    <div className="additional-section">
      <div className="additional-image">
        <div className="image-placeholder">
        <img src="data:image/jpeg;base64,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"/>
        </div>
      </div>
      <div className="additional-text">
        <h2>Modern Reflections on Ancient Values</h2>
        <p>
          Ancient Indian ideals continue to resonate in today’s sporting world. The principles of fair play,
          respect for opponents, and honesty form the core of anti-doping campaigns. By adhering to these
          values, athletes honor the true spirit of competition.
        </p>
        <p>
          Modern sports organizations worldwide emphasize education and strict regulations to prevent doping.
          This ensures that the pursuit of excellence remains free from corruption and unfair practices, 
          echoing lessons from ancient Indian traditions.
        </p>
      </div>
    </div>

    {/* Footer Section */}
    <div className="footer-section">
      <h2>Preserving Integrity in Sports</h2>
      <p>
        Upholding the principles of fairness and transparency is crucial in maintaining the sanctity of 
        sports. By drawing inspiration from ancient Indian ethics, we can ensure a future where athletic
        achievement is celebrated for its purity and dedication.
      </p>
    </div>
  </div>
);
}

export default Antidoping;
