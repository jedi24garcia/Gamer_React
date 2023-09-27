import React from 'react';
import './App.css';
import Home from './Home-Page';
import Home1 from './Next-Page';
import Menu from './menu';
import Contacts from './contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home1 />
      <Routes>            
        <Route path="" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
