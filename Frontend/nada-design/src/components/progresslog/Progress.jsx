import React from 'react';
import './Progress.css';
import avatar from '../../assets/avatar.png'
const InvestigationReport = () => {
  const players = [
    { id: 'I98UY', name: 'Suryansh Ahuja', progress: 43, pendingAlerts: 'NIL' },
    { id: '6FG45', name: 'Riya Singh', progress: 100, pendingAlerts: 'NIL' },
    { id: '09OMM', name: 'Neeraj Kohli', progress: 76, pendingAlerts: 2 },
    { id: 'WER34', name: 'Anant Thakur', progress: 65, pendingAlerts: 'NIL' },
    { id: '09MDS', name: 'Ayush Chopra', progress: 100, pendingAlerts: 3 },
    { id: '09BVC', name: 'Adeeba Khan', progress: 24, pendingAlerts: 1 },
  ];

  return (
    <div className="report-container">
      <header className="header">
        <div className="header-left">
          <img src={avatar} alt="Profile" className="profile-icon" />
          <h1>Investigation Report</h1>
        </div>
        
      </header>
      <div className="content">
        <table className="players-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Progress</th>
              <th>Pending Alerts</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${player.progress}%` }}></div>
                  </div>
                </td>
                <td>{player.pendingAlerts}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="summary-cards">
          {players.map((player) => (
            <div key={player.id} className="card">
              <h2>{player.name}</h2>
              <p>{player.progress}%</p>
              <div className="pending-alerts">Pending Alerts: {player.pendingAlerts}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestigationReport;