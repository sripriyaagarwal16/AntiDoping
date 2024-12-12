// src/pages/Main.jsx
import React from 'react';
import Graph from '../components/Graph/Graph';
import '../components/Graph/Graph.css';
import UrineTestResults from '../components/urinestest/urinetest'
import ABP from '../components/ABP/ABP';
import FinancialTransactions from '../components/financial/financial';
import TravelRecords from '../components/travelrecord/travelrecord';
import ChartComponent from '../components/chartcomponent/chartcomp'
import '../components/Assesment.css'
import GrantAccess from '../components/grantaccess/Grantaccess';
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
      <UrineTestResults/>
      <ABP/>
      <FinancialTransactions/>
      <TravelRecords/>
      <GrantAccess/>
      {/* <ChartComponent/> */}
      <a href="/performancecomparison" className="analyze-button" target="_blank" rel="noopener noreferrer">
         Smart Analysis of Risk Factor
      </a>
      
    </div>
  );
};

export default Assesment;
