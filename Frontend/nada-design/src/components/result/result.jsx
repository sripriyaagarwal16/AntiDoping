import React, { useState } from 'react';
import { TestTube, Scale, FileText } from 'lucide-react';
import './result.css';

const ResultsManagementProcess = () => {
  const [activeStep, setActiveStep] = useState('collection');
  
  const steps = {
    collection: {
      title: "Sample Collection",
      description: "Athlete provides sample to Doping Control Officer (DCO)",
      icon: TestTube
    },
    analysis: {
      title: "Laboratory Analysis",
      description: "'A' sample analyzed, 'B' sample kept frozen at WADA lab",
      icon: Scale
    },
    results: {
      title: "Results Processing",
      description: "Three possible outcomes are determined",
      icon: FileText
    }
  };

  const renderContent = () => {
    switch(activeStep) {
      case 'collection':
        return (
          <div className="content-panel">
            <h3 className="panel-title">Sample Collection Process</h3>
            <div className="panel-content">
              <ul>
                <li>Athletes are selected for testing based on various criteria</li>
                <li>Doping Control Officer (DCO) collects samples following strict protocols</li>
                <li>Samples are split into "A" and "B" specimens</li>
                <li>Chain of custody documentation is maintained throughout</li>
              </ul>
            </div>
          </div>
        );
      
      case 'analysis':
        return (
          <div className="content-panel">
            <h3 className="panel-title">Laboratory Analysis Protocol</h3>
            <div className="panel-content">
              <ul>
                <li>Samples are sent to WADA-accredited laboratory</li>
                <li>"A" sample is analyzed first</li>
                <li>"B" sample remains frozen for potential confirmation testing</li>
                <li>State-of-the-art equipment and methods are used</li>
              </ul>
            </div>
          </div>
        );
      
      case 'results':
        return (
          <div className="content-panel">
            <h3 className="panel-title">Possible Outcomes</h3>
            <div className="outcome-container">
              <div className="outcome-card negative">
                <h4 className="outcome-title">Negative Results</h4>
                <p className="outcome-description">No prohibited substances detected</p>
              </div>
              <div className="outcome-card atypical">
                <h4 className="outcome-title">Atypical Finding</h4>
                <p className="outcome-description">Requires further investigation</p>
              </div>
              <div className="outcome-card adverse">
                <h4 className="outcome-title">Adverse Analytical Finding</h4>
                <p className="outcome-description">Prohibited substance or method detected</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="process-container">
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Results Management Process - NADA India</h2>
          </div>
          <div className="card-content">
            <p className="description">
              NADA India manages results of Anti-Doping Rule Violations (ADRVs) committed by
              athletes, athlete support personnel and other persons under its jurisdiction.
            </p>
            
            <div className="steps-container">
              {Object.entries(steps).map(([key, step]) => {
                const Icon = step.icon;
                return (
                  <div
                    key={key}
                    className={`step-item ${activeStep === key ? 'active' : ''}`}
                    onClick={() => setActiveStep(key)}
                  >
                    <div className="step-header">
                      <div className="step-icon">
                        <Icon size={20} />
                      </div>
                      <span className="step-title">{step.title}</span>
                    </div>
                    <p className="step-description">{step.description}</p>
                  </div>
                );
              })}
            </div>

            {renderContent()}
            
            <div className="note-container">
              <p className="note-text">
                <strong className="note-highlight">Note:</strong> Athletes and support personnel may receive sanctions for anti-doping rule violations. 
                They can either accept the sanctions or challenge before the ADDP and may file an appeal before the ADAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsManagementProcess;