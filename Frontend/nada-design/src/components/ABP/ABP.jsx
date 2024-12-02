import React from "react";
import "./ABP.css";

const ABP = () => {
  return (
    <div className="section">
      <h2>Athlete Biological Passport (ABP)</h2>
      <table>
        <thead>
          <tr>
            <th>Marker</th>
            <th>Result</th>
            <th>Bio. Ref. Interval</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hemoglobin (Hb)</td>
            <td>18.5 g/dL</td>
            <td>13.0 - 17.5 g/dL</td>
          </tr>
          <tr>
            <td>Hematocrit (Hct)</td>
            <td>51%</td>
            <td>37% - 50%</td>
          </tr>
          <tr>
            <td>Reticulocyte (%)</td>
            <td>3.5%</td>
            <td>0.5 - 2.5%</td>
          </tr>
          <tr>
            <td>Off-Score Value</td>
            <td>130</td>
            <td>85 - 125</td>
          </tr>
          <tr>
            <td>Testosterone/Epitestosterone Ratio</td>
            <td>7:1</td>
            <td>≤4:1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ABP;
