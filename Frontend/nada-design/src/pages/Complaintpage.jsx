import React from 'react';
import { Card, Progress, Tag } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import '../components/Complaint.css'; // Make sure to import the CSS file

const ComplaintCard = ({ complaint }) => {
  const { title, status, progress, credibility } = complaint;

  const statusIcon = status === 'Resolved' ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />;
  const statusColor = status === 'Resolved' ? 'green' : 'orange';

  return (
    <Card
      title={title}
      style={{ width: '100%', margin: '10px 0' }} // Ensure card width covers the page
      actions={[<span>{statusIcon}</span>, <Tag color={statusColor}>{status}</Tag>]}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Progress
          percent={progress}
          status={status === 'Resolved' ? 'success' : 'active'}
          style={{ flex: 1 }}
        />
        {(status === 'Resolved' || status === 'Pending') && (
          <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
            Credibility Score: {credibility}
          </span>
        )}
      </div>
    </Card>
  );
};

const ComplaintList = ({ complaints }) => {
  return (
    <div className="complaint-container">
      {complaints.map((complaint, index) => (
        <ComplaintCard key={index} complaint={complaint} />
      ))}
    </div>
  );
};

const complaints = [
  { title: 'Suspicious Drug Test Result - Player A', status: 'In Progress', progress: 50, credibility: '-' },
  { title: 'Unusual Performance Enhancement – Player B', status: 'Resolved', progress: 100, credibility: '90' },
  { title: 'Potential Doping Violation – Player C', status: 'In Progress', progress: 30, credibility: '-' },
  { title: 'Inconsistent Test History – Player D', status: 'Pending', progress: 10, credibility: '50' },
  { title: 'Suspicious Behavior During Competition – Player E', status: 'Resolved', progress: 100, credibility: '95' },
];

const ComplaintPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Complaint Status</h1>
      <ComplaintList complaints={complaints} />
    </div>
  );
};

export default ComplaintPage;
