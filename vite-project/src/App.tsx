// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Strategies from './components/Strategies';
import Backtest from './components/Backtest';
import Deploy from './components/Deploy';
import Help from './components/Help';
import NotFound from './pages/404';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import StrategyWizard from './components/StrategyWizard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/strategy" element={<StrategyWizard />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="strategies" element={<Strategies />} />
          <Route path="backtest" element={<Backtest />} />
          <Route path="deploy" element={<Deploy />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;



