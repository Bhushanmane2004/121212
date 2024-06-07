import React from 'react';
import NavBar from './compound/navbar/NavBar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Card from './pages/Card/Card.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';

function App() {
  return (
    <div className='app'>
      {/* <NavBar /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Card' element={<Card />} />        
        <Route path='/Order' element={<PlaceOrder />} />

      </Routes>
    </div>
  );
}

export default App;
