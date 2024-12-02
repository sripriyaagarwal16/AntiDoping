import React from "react";
import "./urinetest.css";

const UrineTestResults = () => {
  return (
    <div className="section">
      <h2>Urine Test Results</h2>
      <table>
        <thead>
          <tr>
            <th>Substance</th>
            <th>Result</th>
            <th>Bio. Ref. Interval</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Testosterone/Epitestosterone Ratio</td>
            <td>7:1</td>
            <td>≤4:1</td>
          </tr>
          <tr>
            <td>Androsterone</td>
            <td>15 µg/mL</td>
            <td>1 - 10 µg/mL</td>
          </tr>
          <tr>
            <td>Clenbuterol</td>
            <td>Detected</td>
            <td>Not detected</td>
          </tr>
          <tr>
            <td>Stanozolol Metabolites</td>
            <td>Not detected</td>
            <td>Not detected</td>
          </tr>
          <tr>
            <td>Salbutamol</td>
            <td>800 ng/mL</td>
            <td>≤1000 ng/mL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UrineTestResults;
