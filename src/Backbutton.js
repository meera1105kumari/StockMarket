import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <button onClick={goToHome}>
      Back to Home
    </button>
  );
};

export default BackButton;
