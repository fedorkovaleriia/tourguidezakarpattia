import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LocationDirectory from './pages/LocationDirectory';
import MiniGuide from './pages/MiniGuide';
import Account from './pages/Account';
import Error from './pages/Error';
import './assets/fonts/fonts.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/locationdirectory" element={<LocationDirectory />} />
        <Route path="/miniguide" element={<MiniGuide />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
