import React from "react";
import "./Helpline.css";
import playerImage from "../../assets/Player.png"; // Replace with the correct path to your player image

const Helpline = () => {
  return (
    
    <div className="helpline-container">
      {/* Left Section */}
      <div className="helpline-left">
        <h1 className="helpline-number">Help Line: 1800 11 9919</h1>
        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>Ramp No. 02, Hall No. 103-104, Jawaharlal Nehru Stadium Complex, Lodhi Road, New Delhi – 110003.</p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>+91-11-24368274</p>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <p>info.nada@nic.in</p>
          </div>
        </div>
        <ul className="quick-links">
          <li>Guidelines</li>
          <li>Rules and Regulations</li>
          <li>Prohibited Substances</li>
          <li>RTI</li>
          <li>Legal Aid</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="helpline-right">
        <img
          src={playerImage}
          alt="Player"
          className="helpline-image"
        />
      </div>
    </div>
    
    

  );
};

export default Helpline;
