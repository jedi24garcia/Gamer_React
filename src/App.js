import React from 'react';
import './App.css';
import Home from './Home-Page';
import Home1 from './Next-Page';
import Menu from './menu';
import UserlogIn from './log-in';
import Contacts from './contact';
import FreeToPlay from './genre/freetoplay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home1 />
      <genrepage />
      <Routes>            
        <Route path="" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<UserlogIn />} /> 
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/genre/freetoplay" element={<FreeToPlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
