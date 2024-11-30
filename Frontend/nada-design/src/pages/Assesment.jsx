// src/pages/Main.jsx
import React from 'react';
import Graph from '../components/Graph/Graph';
import '../components/Graph/Graph.css';

const Assesment = () => {
  const data = {
    performance: 12,
    hemoglobin: 14.5,
    suspiciousTravel: 'YES',
    positiveDopingTest: 'NO',
    riskCategory: 'HIGH',
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Athlete Performance Analysis</h1>
      <Graph performance={data.performance} hemoglobin={data.hemoglobin} />
        
      
    </div>
  );
};

export default Assesment;
