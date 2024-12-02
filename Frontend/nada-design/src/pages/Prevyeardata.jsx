import React from "react";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import "../components/prevdata.css";

const Prevyeardata = () => {
 

  return (
    <div className="pre">
      <h1>Previous Year Doping Data</h1>
      <div className="charts">
        <BarChart />
        <div className="pie-chart">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Prevyeardata;
