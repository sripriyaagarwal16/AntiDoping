import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/Usercontext"; // Import the context

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { role, setRole } = useContext(UserContext); // Access role and setRole from context

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language based on the selected option
  };

  const handleLogout = () => {
    localStorage.removeItem("role"); // Clear role from localStorage
    setRole(null); // Reset the role in context
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          {/* <li><Link to="/">{t("navbar.home")}</Link></li> */}
          {/* <li><Link to="/about">{t("navbar.About Us")}</Link></li> */}
          {/* <li><Link to="/handbook">{t("navbar.Handbook")}</Link></li> */}
          {/* <li><Link to="/ancientpage">{t("navbar.Ancient Page")}</Link></li> */}

          {/* Role-Specific Links */}
          {role === "player" && (
            <>
              <li><Link to="/health">Health Recommendation</Link></li>
            </>
          )}

          {role === "investigator" && (
            <>
              <li><Link to="/player">{t("navbar.Player Data")}</Link></li>
              <li><Link to="/collaborate">{t("navbar.Collaborate")}</Link></li>
            </>
          )}

          {role === "whistleblower" && (
            <>
              <li><Link to="/whistleblower">{t("navbar.whistleblower")}</Link></li>
              <li><Link to="/complaint">{t("navbar.Complaint Status")}</Link></li>
            </>
          )}
        </ul>

        {/* Language Dropdown */}
        {/* <div className="dropdown">
          <button className="dropdown-btn">{t("navbar.language")}</button>
          <div className="dropdown-content">
            <button onClick={() => handleLanguageChange("en")}>English</button>
            <button onClick={() => handleLanguageChange("hi")}>हिंदी</button>
          </div>
        </div> */}

        {/* Login/Profile Button */}
        {!role ? (
          <Link to="/Login" className="login-button">
            {t("navbar.login")}
          </Link>
        ) : (
          <>
            {/* <Link to="/profile" className="login-button">
              {t("navbar.Profile")}
            </Link> */}
            <button onClick={handleLogout} className="login-button">
              {t("navbar.Logout")}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
