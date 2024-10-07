// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseList from './components/ExpenseList';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Error from './components/Error';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="logo"
          onClick={() => window.location.href = '/'}
        />
        <motion.div className="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/edit/:id" element={<EditExpense />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
