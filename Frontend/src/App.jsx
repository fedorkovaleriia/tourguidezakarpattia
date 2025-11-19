import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LocationDirectory from './pages/LocationDirectory';
import MiniGuide from './pages/MiniGuide';
import Account from './pages/Account';
import Error from './pages/Error';
import './assets/fonts/fonts.css';
import { useAuth } from './hooks/useAuth.jsx';

function App() {
  function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/locationdirectory" element={<LocationDirectory />} />
        <Route path="/miniguide" element={<MiniGuide />} />
        <Route path="/account" element={<Account />} />
        <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />

        <Route path="*" element={<Error />} />
      </Routes>
  );
}

export default App;
