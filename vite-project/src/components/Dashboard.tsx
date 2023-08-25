import React from 'react';
import { Router, Route, Link, Switch, Outlet } from 'react-router-dom';
// import logo from './logo.png'; // Import your logo image file here

import Profile from './Profile';
import Strategies from './Strategies';
import Backtest from './Backtest';
import Deploy from './Deploy';
import Help from './Help';

function Dashboard() {
  return (
    <div>
      <nav>
        <div>Logo</div>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/strategies">Strategies</Link>
        <Link to="/dashboard/backtest">Backtest</Link>
        <Link to="/dashboard/deploy">Deploy</Link>
        <Link to="/dashboard/help">Help</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;



