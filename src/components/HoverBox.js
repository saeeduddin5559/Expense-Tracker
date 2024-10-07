// src/components/HoverBox.js
import React from 'react';
import './HoverBox.css';
import { useNavigate } from 'react-router-dom';

const HoverBox = ({ title, description, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo); // Dynamically navigate to the route passed as prop
  };

  return (
    <div className="hover-box" onClick={handleClick}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="arrow">→</div>
    </div>
  );
};

export default HoverBox;
