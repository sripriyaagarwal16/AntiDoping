// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from "react-router-dom"; // Import Link for routing
import logo from '../../assets/Logo.jpg'
import './Navbar.css';
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change


const Navbar = () => {
  const { t, i18n } = useTranslation(); 
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language based on the selected option
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/">{t('navbar.home')}</Link></li>
          <li><Link to="/about">{t('navbar.About Us')}</Link></li>
          <li><a href="/player">{t('navbar.Player Data')}</a></li>
          <li><a href="/handbook">{t('navbar.Handbook')}</a></li>
          <li><Link to="/collaborate">{t('navbar.Collaborate')}</Link></li>
          <li><a href="/whistleblower">{t('navbar.whistleblower')}</a></li>
        </ul>
        
        {/* Language Dropdown */}
        <div className="dropdown">
          <button className="dropdown-btn">{t('navbar.language')}</button>
          <div className="dropdown-content">
            <button onClick={() => handleLanguageChange('en')}>English</button>
            <button onClick={() => handleLanguageChange('hi')}>हिंदी</button>
          </div>
        </div>

        <Link to="/Login" className="login-button">
          {t('navbar.login')}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
