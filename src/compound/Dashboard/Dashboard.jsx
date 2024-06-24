import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import graph1 from '../../assets/Screenshot 2024-06-09 090935.png';
import graph2 from '../../assets/Screenshot 2024-06-09 090959.png';
import { Assistant } from '../../assistant'; // Adjust the path accordingly
import doctorsData from '../../data/doctors.json'; // Adjust the path accordingly

const Dashboard = ({ userType, addContactedPatient, contactedPatients }) => {
  const [prompt, setPrompt] = useState('');
  const [report, setReport] = useState(null);
  const [answer, setAnswer] = useState('Your answer will appear here');
  const [diagnosis, setDiagnosis] = useState('');
  const [advice, setAdvice] = useState('');
  const [suggestedDoctors, setSuggestedDoctors] = useState([]);
  const [patientList, setPatientList] = useState(contactedPatients || []);

  useEffect(() => {
    if (userType === 'doctor') {
      setPatientList(contactedPatients);
    }
  }, [userType, contactedPatients]);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleReportUpload = (e) => {
    const file = e.target.files[0];
    setReport(file);
  };

  const generateDiagnosis = async () => {
    if (report) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const reportContent = e.target.result;
        const message = `Generate Advice and Report Based on Report: ${reportContent}\n and also Your Query : Prompt: ${prompt}`;
        const response = await Assistant(message);
        setDiagnosis(`${response}`);
        setAdvice(`.`);
        setAnswer(`Processed answer for: ${report.name}`);
        suggestDoctors(response);
      };
      reader.readAsText(report);
    } else {
      setDiagnosis('');
      setAdvice('');
      setAnswer('Please upload a report to generate a diagnosis.');
    }
  };

  const suggestDoctors = (diagnosis) => {
    const keywords = ['Cardiologist', 'Dermatologist', 'Neurologist', 'Orthopedic', 'Pediatrician'];
    const matchedDoctors = doctorsData.filter(doctor =>
      keywords.some(keyword => diagnosis.includes(keyword) && doctor.specialization.includes(keyword))
    );
    setSuggestedDoctors(matchedDoctors);
  };

  const contactDoctor = (doctor) => {
    const patientInfo = {
      name: prompt, // assuming patient's name is entered in the prompt
      report: report.name,
      diagnosis
    };

    const doctorPatients = JSON.parse(localStorage.getItem('doctorPatients')) || {};
    if (!doctorPatients[doctor.id]) {
      doctorPatients[doctor.id] = [];
    }
    doctorPatients[doctor.id].push(patientInfo);
    localStorage.setItem('doctorPatients', JSON.stringify(doctorPatients));

    if (addContactedPatient) {
      addContactedPatient(patientInfo);
    }
    alert(`Contact request sent to ${doctor.name}`);
  };

  return (
    <div className="dashboard">
      <h1>{userType === 'doctor' ? 'Doctor Dashboard' : 'Patient Dashboard'}</h1>
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
          <button onClick={generateDiagnosis}>Generate Diagnosis</button>
        </div>
        <div className="main-content">
          <div className="answer-section">
            <h2>Answer</h2>
            <p>{answer}</p>
            <p>{diagnosis}</p>
            <p>{advice}</p>
            <h2>Suggested Doctors</h2>
            {suggestedDoctors.length > 0 ? (
              <ul>
                {suggestedDoctors.map((doctor) => (
                  <li key={doctor.id}>
                    {doctor.name} - {doctor.specialization} - {doctor.location} - {doctor.contact}
                    <button onClick={() => contactDoctor(doctor)}>Contact Doctor</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No doctors available for the given diagnosis.</p>
            )}
          </div>
          {userType === 'doctor' && (
            <div className="patient-list-section">
              <h2>Patient List</h2>
              {patientList.length > 0 ? (
                <ul>
                  {patientList.map((patient, index) => (
                    <li key={index}>
                      {patient.name} - {patient.report} - {patient.diagnosis}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No patients have contacted you yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
