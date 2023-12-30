import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './login'; // Import the Login component

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <div>
      <h2>Home</h2>
      <p>This is the home page content.</p>
      <Link to="/login">Go to Login</Link>
      <hr />
      {/* <button onClick={toggleLogin}>
        {showLogin ? 'Hide Login' : 'Show Login'}
      </button>
      {showLogin && <Login />} */}
    </div>
  );
};

export default Home;
