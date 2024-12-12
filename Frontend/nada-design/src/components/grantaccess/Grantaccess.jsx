// GrantAccess.jsx
import React, { useState } from 'react';
import './Grantaccess.css';

const GrantAccess = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState('');
  const [selectedAccess, setSelectedAccess] = useState({
    urineResults: false,
    bloodTestResults: false,
    xRayResults: false,
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleAccessChange = (accessType) => {
    setSelectedAccess((prevAccess) => ({
      ...prevAccess,
      [accessType]: !prevAccess[accessType],
    }));
  };

  const handleSubmit = () => {
    const accessTypes = Object.keys(selectedAccess)
      .filter((key) => selectedAccess[key])
      .map((key) => key.replace(/([A-Z])/g, ' $1').toLowerCase());

    alert(`Access granted to ${selectedOption} with email ${email} for: ${accessTypes.join(', ')}`);
  };

  return (
    <div className="grant-access-container">
      <h1 className="grant-access-heading">Grant Access</h1>
      <div className="access-options">
        <label>
          <input
            type="checkbox"
            checked={selectedAccess.urineResults}
            onChange={() => handleAccessChange('urineResults')}
          />
          Urine Results
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedAccess.bloodTestResults}
            onChange={() => handleAccessChange('bloodTestResults')}
          />
          Athlete Biological Passport (ABP)
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedAccess.xRayResults}
            onChange={() => handleAccessChange('xRayResults')}
          />
        Financial Transactions
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedAccess.xRayResults}
            onChange={() => handleAccessChange('xRayResults')}
          />
      Travel Records
        </label>
      </div>
      <div className="role-selection">
        <h2>Select Role</h2>
        <label>
          <input
            type="radio"
            name="role"
            value="doctor"
            checked={selectedOption === 'doctor'}
            onChange={() => handleOptionChange('doctor')}
          />
          Analyst
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="nurse"
            checked={selectedOption === 'nurse'}
            onChange={() => handleOptionChange('nurse')}
          />
        Investigator
        </label>
      
      </div>
      <div className="email-input">
        <h3>Enter Email</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Grant Access</button>
    </div>
  );
};

export default GrantAccess;