import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register necessary chart elements
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const BarChart = () => {
  const data = {
    labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Doping Cases",
        data: [800, 600, 700, 750, 850, 900, 880, 450, 400, 350, 50],
        backgroundColor: [
          "#008080", // Male
          "#A0D6D6", // Female (2014)
          "#008080", // Male
          "#A0D6D6", // Female (2016)
          "#008080", // Male
          "#A0D6D6", // Female (2018)
          "#008080", // Male
          "#008080", // Male
          "#008080", // Male
          "#008080", // Male
          "#008080", // Male
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Doping Data",
      },
    },
  };

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
