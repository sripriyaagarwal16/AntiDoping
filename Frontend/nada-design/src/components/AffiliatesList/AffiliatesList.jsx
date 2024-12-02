import React from 'react';

const affiliates = [
  { name: 'Kathryn Murphy', description: 'In eu do cillum lorem exercit.' },
  { name: 'James Harrid', description: 'Deserunt minim ididunt nostrud.' },
  { name: 'Elon Melon', description: 'Tempor labore consequat.' },
  { name: 'Mia Smith', description: 'Cupidatat eiusmod tempor labore.' },
  { name: 'James Doe', description: 'Duis excepteur enim dolore aliqua.' },
];

const AffiliatesList = () => (
  <div className="affiliates-list">
    <h2>Affiliates on Board</h2>
    {affiliates.map((affiliate) => (
      <div key={affiliate.name} className="affiliate-card">
        <h3>{affiliate.name}</h3>
        <p>{affiliate.description}</p>
      </div>
    ))}
  </div>
);

export default AffiliatesList;
