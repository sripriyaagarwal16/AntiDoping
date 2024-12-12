import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import './PerformanceComparisons.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const PerformanceComparison = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/performance/comparison")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.historical_scores && data.current_year_score) {
          setData(data);
        } else {
          console.error("Invalid data format received from backend");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  const historicalScores = data.historical_scores;
  const currentYearScore = data.current_year_score;

  // Labels for years (past + 2024)
  const labels = [...historicalScores.map((d) => d.year), "2024"];

  // Data for past 10 years
  const historicalPerformanceScores = historicalScores.map((d) => d.performance_score);

  // Combine historical and current year scores into a single dataset for a connected line
  const combinedPerformanceScores = [
    ...historicalPerformanceScores, // Historical scores
    currentYearScore.performance_score || 0, // Current year's score
  ];

  // Chart data
  const chartData = {
    labels, // Year labels (historical + current)
    datasets: [
      {
        label: "Performance Score (Combined)",
        data: combinedPerformanceScores,
        borderColor: "blue", // Use green for the entire connected line
        backgroundColor: "rgba(0, 0, 255, 0.1)", // Light green fill
        borderWidth: 2,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  return (
    <div>
      <h1>Performance Analysis</h1>
      <Line data={chartData} />
      <div className="current-year-score">
        <h2>Current Year Score (2024)</h2>
        <p>Runs Avg: {currentYearScore.runs_avg ? currentYearScore.runs_avg.toFixed(2) : "N/A"}</p>
        <p>Strike Rate Avg: {currentYearScore.strike_rate_avg ? currentYearScore.strike_rate_avg.toFixed(2) : "N/A"}</p>
        <p>Wickets Avg: {currentYearScore.wickets_avg ? currentYearScore.wickets_avg.toFixed(2) : "N/A"}</p>
        <p>Economy Rate Avg: {currentYearScore.economy_rate_avg ? currentYearScore.economy_rate_avg.toFixed(2) : "N/A"}</p>
        <p>Performance Score: {currentYearScore.performance_score ? currentYearScore.performance_score.toFixed(2) : "N/A"}</p>
        <p
          className={`predicted-risk ${
            currentYearScore.predicted_risk === "High"
              ? "high"
              : currentYearScore.predicted_risk === "Medium"
              ? "medium"
              : "low"
          }`}
        >
          Predicted Risk: {currentYearScore.predicted_risk}
        </p>
      </div>
     
    </div>
  );
};

export default PerformanceComparison;
