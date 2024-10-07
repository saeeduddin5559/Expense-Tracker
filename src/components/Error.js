import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Error.css'

const Error = () => {
  const location = useLocation();
  const errorMessage = location.state?.message || 'The page you are looking for does not exist.';

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <img src="/dribble.gif" alt="Error Animation"/>
        {/* Error message is dynamic if the message is recieved then the error message is printed else 
        the hardcoded response */}
        <p>Error: {errorMessage}</p>
        <Link to="/" className="home-link">Go Back Home</Link>
      </div>
    </div>
  );
};

export default Error;
