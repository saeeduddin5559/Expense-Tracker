import React from 'react';
import HoverBox from '../components/HoverBox'; // Import HoverBox component
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <HoverBox
        title="Expense Tracker"
        description="Track and manage your expenses efficiently and effectively."
        navigateTo="/expenses"  // Pass the route as a prop
      />
    </div>
  );
};

export default Home;
