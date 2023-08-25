import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Homepage from './components/Homepage.tsx';
import Dashboard from './components/Dashboard.tsx';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



