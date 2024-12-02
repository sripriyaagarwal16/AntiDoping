import React from "react";
import { Bar } from "react-chartjs-2";
import "./chartcomp.css";

const ChartComponent = ({ data, options }) => {
  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
