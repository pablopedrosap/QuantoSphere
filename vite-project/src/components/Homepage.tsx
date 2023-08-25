import React from 'react';
// import logo from './src/assets/react.svg';

const Homepage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
{/*             <img src={logo} alt="QuantoSphere logo" className="navbar-logo" /> */}
            <span className="brand-name">QuantoSphere</span>
          </div>
          <div className="navbar-menu">
            <a href="#how-it-works" className="navbar-link">How It Works</a>
            <a href="#login" className="navbar-link">Login</a>
            <a href="#signup" className="navbar-link">Sign Up</a>
          </div>
        </div>
      </nav>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">THE NEW GATEWAY TO QUANTITATIVE FINANCE</h1>
        </div>
      </section>
      {/* Add more content sections here */}
    </>
  );
};

export default Homepage;

