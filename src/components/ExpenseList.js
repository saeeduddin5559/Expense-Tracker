import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses, deleteExpense } from '../redux/ExpenseSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ExpenseList.css';

const ExpenseList = () => {
    const dispatch = useDispatch();
    const { expenses, loading, error } = useSelector((state) => state.expenseData);

    useEffect(() => {
        dispatch(fetchExpenses());
    }, [dispatch]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
        if (confirmDelete) {
            dispatch(deleteExpense(id));
        }
    };

    const totalExpenses = expenses.reduce((total, expense) => total + Number(expense.amount), 0);

    const categorizedExpenses = expenses.reduce((categories, expense) => {
        const { type, amount } = expense;
        if (!categories[type]) {
            categories[type] = 0;
        }
        categories[type] += Number(amount);
        return categories;
    }, {});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <motion.div
            className="expense-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
        >
            <div className="expense-banner">
                <img src="expense-banner.jpg" alt="Expense Tracker Banner" className="expense-banner-img" />
            </div>
            <h2>Expense List</h2>
            <div className="total-expenses">
                <strong>Total Expenses: ${totalExpenses}</strong>
            </div>
            <div>
                {Object.keys(categorizedExpenses).map((category) => (
                    <p key={category}>
                        {category}: ${categorizedExpenses[category]}
                    </p>
                ))}
            </div>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <div className="expense-description">
                            {expense.description} - ${expense.amount} - {expense.date}
                        </div>
                        <div className="button-container">
                            <Link className='button' to={`/edit/${expense.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(expense.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="add-expense">
                <Link to="/add">Add New Expense</Link>
            </div>
        </motion.div>
    );
};

export default ExpenseList;
