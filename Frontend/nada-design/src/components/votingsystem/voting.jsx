import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import './voting.css'

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VotingPage = () => {
  const { id } = useParams(); // Get player ID from URL
  const [votes, setVotes] = useState({ guilty: 0, notGuilty: 0 });
  const [hasVoted, setHasVoted] = useState(false); // Track voting status

  const handleVote = (type) => {
    if (!hasVoted) { // Allow vote only if the user hasn't voted yet
      setVotes((prevVotes) => ({
        ...prevVotes,
        [type]: prevVotes[type] + 1,
      }));
      setHasVoted(true); // Mark as voted
    }
  };

  // Graph data configuration
  const data = {
    labels: ["Guilty", "Not Guilty"], // Labels for the graph
    datasets: [
      {
        label: "Votes",
        data: [votes.guilty, votes.notGuilty],
        backgroundColor: ["#ff4c4c", "#4caf50"], // Color for the bars
        borderColor: ["#ff0000", "#388e3c"], // Border color
        borderWidth: 1,
      },
    ],
  };

  // Graph options for customization
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Voting Results for Player ${id}`,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} votes`, // Display votes in tooltips
        },
      },
    },
  };

  return (
    <div className="voting-page">
      <h1>Vote for Player {id}</h1>
      <p>
        Please vote whether you find this player <strong>Guilty</strong> or{" "}
        <strong>Not Guilty</strong>.
      </p>
      
      <div className="vote-options">
        <button
          onClick={() => handleVote("guilty")}
          className="vote-btn guilty"
          disabled={hasVoted} // Disable button after voting
        >
          Guilty
        </button>
        <button
          onClick={() => handleVote("notGuilty")}
          className="vote-btn not-guilty"
          disabled={hasVoted} // Disable button after voting
        >
          Not Guilty
        </button>
      </div>

      {/* Show notification if the user has voted */}
      {hasVoted && (
        <div className="vote-notification">
          <p>Thank you for voting! Your opinion has been recorded.</p>
        </div>
      )}

      <div className="vote-results">
        <h3>Current Votes:</h3>
        <p>Guilty: {votes.guilty}</p>
        <p>Not Guilty: {votes.notGuilty}</p>
      </div>

      {/* Graph Container */}
      <div className="vote-graph">
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
