import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('user'); // Set default username to 'user'
  const [password, setPassword] = useState('user'); // Set default password to 'user'
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication logic
    if (username === 'user' && password === 'user') {
      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } else {
      // Display an error message or perform other actions for failed login
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
