import React, { useState } from 'react';
import './Dashboard.css';
import graph1 from '../../assets/Screenshot 2024-06-09 090935.png';
import graph2 from '../../assets/Screenshot 2024-06-09 090959.png';

const Dashboard = ({ userType }) => {
  const [prompt, setPrompt] = useState('');
  const [report, setReport] = useState(null);
  const [answer, setAnswer] = useState('Your answer will appear here');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleReportUpload = (e) => {
    const file = e.target.files[0];
    setReport(file);
  };

  const generateAnswer = () => {
    if (report) {
      setAnswer(`Processed answer for: ${report.name}`);
    } else {
      setAnswer('Please upload a report to generate an answer.');
    }
  };

  return (
    <div className="dashboard">
      <h1>{userType === 'doctor' ? '' : ''}</h1>
      <div className="sidebar">
        {userType === 'doctor' ? (
          <ul>
            <li>Patient List</li>
            <li>Patient Details</li>
            <li>Uploaded Reports</li>
            <li>Notes / Comments on Reports</li>
            <li>Prescriptions</li>
            <li>Features for Patients</li>
          </ul>
        ) : (
          <ul>
            <li>View Personal Information</li>
            <li>View Uploaded Reports</li>
            <li>View Medical History</li>
            <li>Appointment Scheduling</li>
            <li>View Prescriptions</li>
            <li>Security and Privacy</li>
            <li>Security Features</li>
          </ul>
        )}
      </div>
      <div className="content">
        <div className="input-section">
          <label>
            Prompt:
            <input type="text" value={prompt} onChange={handlePromptChange} />
          </label>
          <label>
            Upload Report:
            <input type="file" onChange={handleReportUpload} />
          </label>
          <button onClick={generateAnswer}>Generate Answer</button>
        </div>
        <div className="main-content">
          <div className="graphs-section">
            <h2>Graphs</h2>
            <img src={graph1} alt="Graph 1" />
            <img src={graph2} alt="Graph 2" />
            <img src="https://via.placeholder.com/300x200" alt="Graph 3" />
          </div>
          <div className="answer-section">
            <h2>Answer</h2>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
