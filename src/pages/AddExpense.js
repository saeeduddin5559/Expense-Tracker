import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated: useNavigate instead of useHistory
import { addExpense } from '../redux/ExpenseSlice';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated: Use useNavigate instead of useHistory

  const handleAddExpense = (expense) => {
    dispatch(addExpense(expense));
    navigate('/expenses'); // Updated: use navigate to go back to the expense list
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <ExpenseForm onSubmit={handleAddExpense} />
    </div>
  );
};

export default AddExpense;
