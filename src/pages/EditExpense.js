import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editExpense, fetchExpenses } from '../redux/ExpenseSlice';
import ExpenseForm from '../components/ExpenseForm';

const EditExpense = () => {
  const { id } = useParams(); // Get the expense ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { expenses, loading, error } = useSelector((state) => state.expenseData);
  const [initialExpense, setInitialExpense] = useState(null);

  useEffect(() => {
    // Only fetch expenses if they are not already loaded
    if (expenses.length === 0) {
      dispatch(fetchExpenses());
    }
  }, [dispatch, expenses.length]);

  useEffect(() => {
    //Finding the expense based on id only after the loading is false
    if (!loading && expenses.length > 0) {
      const expense = expenses.find((expense) => expense.id.toString() === id);
      if (expense) {
        setInitialExpense(expense);
      } else {
        // Redirect to the error page if the expense is not found
        navigate('/error', { state: { message: 'Expense Not Found' } });
      }
    }
  }, [expenses, id, loading, navigate]);

  const handleEditExpense = (updatedExpense) => {
    dispatch(editExpense({ id, updatedExpense })).then(() => {
      navigate('/expenses'); // Navigate back to the home page after updating
    });
  };

  if (loading) return <p>Loading...</p>; // Display loading state if expenses are being fetched
  if (error) return <p>Error: {error}</p>; // Display error if there's an issue fetching expenses
  if (!initialExpense) return <p>Expense Not Found...</p>;

  return (
    <div className='edit-conatiner'>
      <h3>Edit Expense</h3>
      <ExpenseForm initialExpense={initialExpense} onSubmit={handleEditExpense} />
    </div>
  );
};

export default EditExpense;
