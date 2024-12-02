import React from "react";
import { Link } from "react-router-dom";
import "./Helpline.css";

const Helpline = () => {
  return (
    <div className="helpline-container">
      {/* Header */}
      <header className="helpline-header">
        <h1 className="helpline-title">NADA</h1>
        <p className="helpline-address">Ramp No. 02, Hall No. 103-104, First Floor, Jawaharlal Nehru Stadium Complex, Lodhi Road, New Delhi - 110003.</p>
        <p className="helpline-phone">+91-11-24368274</p>
        <a href="mailto:rusada@rusada.ru" className="helpline-email">
        info.nada@nic.in
        </a>
        <p className="helpline-copyright">
          © Copying of any materials from the site is permissible only with the
          permission of the copyright holder.
        </p>
      </header>

      {/* Navigation */}
      <nav className="helpline-nav">
        <ul>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/player">Player Data</Link>
          </li>
          <li>
            <Link to="/handbook">Handbook</Link>
          </li>
          <li>
            <Link to="/collaborate">Collaborate</Link>
          </li>
          <li>
            <Link to="/whistleblower">Whisleblower</Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <footer className="helpline-footer">
        <div className="footer-subscribe">
          <h3>Subscribe to news of NADA</h3>
          <input
            type="email"
            placeholder="YOUR E-MAIL"
            className="footer-input"
          />
<button className="footer-button" onClick={() => alert('Subscribed successfully!')}>
  Subscribe
</button>        </div>
        <div className="footer-icons">
          <a href="#!" className="icon-link">Facebook</a>
          <a href="#!" className="icon-link">Twitter</a>
          <a href="#!" className="icon-link">Instagram</a>
        </div>
        <p className="footer-credits">
          Site support: <strong>Webit</strong> | Site development: <strong>Web Family</strong>
        </p>
      </footer>
    </div>
  );
};

export default Helpline;
