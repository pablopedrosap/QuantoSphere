import React, { useState } from 'react';
import axios from 'axios';


const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const user = {
      email,
      password,
    };

    axios.post('http://127.0.0.1:8000/user/api/register/', user)
      .then(response => {
        localStorage.setItem('authToken', response.data.access_token);
        window.location.href = '/dashboard';
      })
      .catch(error => {
        setError('An error occurred during registration.');
        console.error(error);
      });
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
