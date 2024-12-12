import React from "react";
import "./Helpline.css";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* About Us Section */}
        <div>
          <h3 className="footer-heading">ABOUT US</h3>
          <ul className="footer-list">
            <li>Who we are</li>
            <li>What we do</li>
            <li>Employment</li>
            <li>Freedom of Information</li>
          </ul>
        </div>

        {/* Handy Links Section */}
        <div>
          <h3 className="footer-heading">HANDY LINKS</h3>
          <ul className="footer-list">
            <li>Contact us</li>
            <li>E-Learning</li>
            <li>Sport Integrity apps</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="footer-heading">FOLLOW US</h3>
          <div className="footer-icons">
            <a href="#" className="icon-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="icon-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="icon-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon-link" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="icon-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="footer-heading">CONTACT US</h3>
          <ul className="footer-list">
            <li>Contact the agency</li>
            <li>Know what to report</li>
            <li>Integrity complaint or report</li>
          </ul>
        </div>
      </div>

      {/* Acknowledgment and Address */}
      <div className="footer-acknowledgment">
        <h3 className="footer-heading">ACKNOWLEDGEMENT</h3>
        <p>
          In the spirit of fair practices and anti-doping, we honor India's rich cultural and
          athletic heritage, deeply rooted in ancient traditions like Ayurveda and the enduring
          values of discipline, respect, and integrity. From past athletes who have set global
          benchmarks to modern sportsmen and women, India has always celebrated the pursuit of
          excellence through hard work and honesty. Upholding the highest standards of fair play, we
          commit to promoting clean competition, ensuring that future generations thrive in sports
          grounded in the wisdom of our ancient history and the principles of fairness and respect.
        </p>
        <div className="footer-contact">
          <div>
            <p>
              Ramp No. 02, Hall No. 103-104, First Floor,
              <br />
              Jawaharlal Nehru Stadium Complex, Lodhi Road, New Delhi - 110003.
            </p>
            <p>Email: info.nada@nic.in</p>
            <p>Phone: +91-11-24368274</p>
          </div>
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
