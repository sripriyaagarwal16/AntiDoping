// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from "react-router-dom"; // Import Link for routing
import logo from '../../assets/Logo.jpg'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/player">Player Data</a></li>
          <li><a href="/handbook">HandBook</a></li>
          <li><a href="#">Whistleblower</a></li>
        </ul>
        <Link to="/Login" className="login-button">
          Login/Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
