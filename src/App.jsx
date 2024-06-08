import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './compound/navbar/NavBar';
import Home from './pages/Home/Home';
import Card from './pages/Card/Card';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopUp from './compound/LoginPopUp/LoginPopUp';

function App() {
  const [showlogin, setshowlogin] = useState(false);

  return (
    <>
      {showlogin ? <LoginPopUp setshowlogin={setshowlogin} /> : null}
      <div className='app'>
        <NavBar setshowlogin={setshowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Card' element={<Card />} />
          <Route path='/Order' element={<PlaceOrder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;