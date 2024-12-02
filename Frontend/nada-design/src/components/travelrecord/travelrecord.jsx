import React from "react";
import "./travelrecord.css";

const TravelRecords = () => {
  return (
    <div className="section">
      <h2>Travel Records</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Destination</th>
            <th>Events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July 2024</td>
            <td>Zurich, Switzerland</td>
            <td>No official event.</td>
          </tr>
          <tr>
            <td>March 2024</td>
            <td>Mexico</td>
            <td>No tournaments/no training camps.</td>
          </tr>
          <tr>
            <td>October 2024</td>
            <td>Tokyo, Japan</td>
            <td>Extended stay after Japan Open.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TravelRecords;
