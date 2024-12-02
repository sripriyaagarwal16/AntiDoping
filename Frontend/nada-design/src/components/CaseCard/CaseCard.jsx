import React from 'react';

const cases = [
  {
    id: 'C306671',
    time: '10:30 AM',
    status: 'Under Investigation',
    members: 4,
    caseNote: '',
  },
  {
    id: 'E78990A',
    time: '2 December 2024',
    status: 'Completed',
    members: 5,
    caseNote: 'Well Done, Team!',
  },
  {
    id: 'M00372D',
    time: '8:00 AM',
    status: 'Pending',
    members: 1,
    caseNote: 'Collaborate and Investigate',
  },
];

const CasesList = () => (
  <div className="cases-list">
    {cases.map((caseItem) => (
      <div key={caseItem.id} className="case-card">
        <h3>{caseItem.id}</h3>
        <p>Status: {caseItem.status}</p>
        <p>Time: {caseItem.time}</p>
        <p>Members: {caseItem.members}</p>
        <p>{caseItem.caseNote}</p>
      </div>
    ))}
  </div>
);

export default CasesList;
