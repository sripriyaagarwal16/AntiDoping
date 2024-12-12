import React from "react";
import "../components/Dashboard.css"; // Updated CSS file
import "../components/uppercalendar/uppercalendar.css";
import CalendarComp from "../components/uppercalendar/uppercalendar";
import CaseComponent from "../components/CaseCard/CaseCard";
import AffiliatesBoard from "../components/AffiliatesList/AffiliatesList"; // Import AffiliatesBoard component

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="heade">
        <h1>Investigation Forum</h1>
        <button className="create-event">+ Create Event</button>
      </header>
      <CalendarComp />

      <div className="main-section">
        <div className="content-container">
          <div className="left-content">
            <CaseComponent />
          </div>
          <div className="right-content">
            <AffiliatesBoard /> {/* Add AffiliatesBoard here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
