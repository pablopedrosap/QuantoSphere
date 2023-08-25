import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import StrategyWizard from './components/StrategyWizard';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
          <Route path="/strategy" element={<StrategyWizard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
    </Router>
  );
}

export default App;



