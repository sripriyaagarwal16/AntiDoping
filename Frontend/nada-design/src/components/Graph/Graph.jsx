import React from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const playersData = {
  A001001: {
    avgPerformanceIncrease: 12,
    haemoglobinLevel: 14.5,
    suspiciousTravel: "Yes",
    positiveDopingTest: "No",
    riskCategory: "High",
  },
  C098665: {
    avgPerformanceIncrease: 3,
    haemoglobinLevel: 12,
    suspiciousTravel: "No",
    positiveDopingTest: "No",
    riskCategory: "Low",
  },
  D554663: {
    avgPerformanceIncrease: 4,
    haemoglobinLevel: 13.5,
    suspiciousTravel: "No",
    positiveDopingTest: "Yes",
    riskCategory: "High",
  },
  A334876: {
    avgPerformanceIncrease: 15,
    haemoglobinLevel: 16.4,
    suspiciousTravel: "No",
    positiveDopingTest: "Yes",
    riskCategory: "Low",
  },
  R009887: {
    avgPerformanceIncrease: 19,
    haemoglobinLevel: 18,
    suspiciousTravel: "No",
    positiveDopingTest: "No",
    riskCategory: "Medium",
  },
  W334889: {
    avgPerformanceIncrease: 21,
    haemoglobinLevel: 16,
    suspiciousTravel: "No",
    positiveDopingTest: "No",
    riskCategory: "High",
  },
};

const Assessment = () => {
  const { playerId } = useParams();
  const player = playersData[playerId];

  if (!player) {
    return <div>Player data not found!</div>;
  }

  const data = {
    labels: ["Avg. Performance Increase", "Haemoglobin Level"],
    datasets: [
      {
        label: "Metrics",
        data: [player.avgPerformanceIncrease, player.haemoglobinLevel],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ padding: "20px" }} className="title">
      <h1>Assessment for {playerId}</h1>
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <Bar data={data} options={options} />
      </div>
      <table style={{ width: "100%", marginTop: "20px", border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Suspicious Travel</th>
            <th>Positive Doping Test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{player.suspiciousTravel}</td>
            <td>{player.positiveDopingTest}</td>
           
          </tr>
        </tbody>
      </table>
      {/* Niche ka koi bhi laal dibba yahan se hata diya */}
    </div>
  );
};

export default Assessment;
