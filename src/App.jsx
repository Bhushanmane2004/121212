import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './compound/navbar/NavBar';
import Home from './pages/Home/Home';
import Card from './pages/Card/Card';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopUp from './compound/LoginPopUp/LoginPopUp';
import Dashboard from './compound/Dashboard/Dashboard';
import Footer from './compound/Footer/Footer.jsx';

function App() {
  const [showlogin, setshowlogin] = useState(false);
  const [contactedPatients, setContactedPatients] = useState(() => {
    const savedPatients = localStorage.getItem('patients');
    return savedPatients ? JSON.parse(savedPatients) : [];
  });

  const addContactedPatient = (patient) => {
    setContactedPatients((prevPatients) => {
      const updatedPatients = [...prevPatients, patient];
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      return updatedPatients;
    });
  };

  return (
    <>
      {showlogin ? <LoginPopUp setshowlogin={setshowlogin} /> : null}
      <div className="app">
        <NavBar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Order" element={<PlaceOrder />} />
          <Route path="/Dashboard" element={<Dashboard userType="patient" addContactedPatient={addContactedPatient} />} />
          <Route path="/DoctorDashboard" element={<Dashboard userType="doctor" contactedPatients={contactedPatients} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
