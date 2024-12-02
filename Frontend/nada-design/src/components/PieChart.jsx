import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#008080", "#A0D6D6"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div style={{ height: "200px", width: "200px" }}>
       <h4>Gender</h4>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
