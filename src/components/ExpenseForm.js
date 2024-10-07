// src/components/ExpenseForm.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ExpenseForm.css'

const ExpenseForm = ({ onSubmit, initialExpense = { description: '', amount: '', date: '', type: '' } }) => {
    const [expense, setExpense] = useState(initialExpense);
    const [error, setError] = useState('');
    const [customType, setCustomType] = useState('');
    // Recognized types
    const typeOptions = ['Select Type', 'Food', 'Transport', 'Entertainment', 'Other'];

    useEffect(() => {
        // Check if the type is one of the known options
        if (initialExpense.type && !typeOptions.includes(initialExpense.type)) {
            // if the type is not recognized treat it as 'Other' and store the actual type in customType
            setExpense((prev) => ({
                ...prev,
                type: 'Other',
            }));
            setCustomType(initialExpense.type);
        } else if (initialExpense.type === 'Other') {
            // If the type is 'Other', leave customType blank making it an optional input
            setCustomType('');
        } else {
            setCustomType(customType);
        }


        // Set the date to today's date if the initial date is empty
        if (!initialExpense.date) {
            const today = new Date().toLocaleDateString('en-CA'); // Format YYYY-MM-DD
            setExpense((prev) => ({
                ...prev,
                date: today,
            }));
        }
    }, [initialExpense]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense((prev) => ({
            ...prev,
            [name]: value,
        }));

        // if (name === 'type' && value === 'Other') {
        //     expense.type = '';
        // }
    };

    const handleCustomTypeChange = (e) => {
        setCustomType(e.target.value);
    };

    const handleBack = () => {
        window.history.back();  // Navigate to the previous page
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Amount validation
        if (parseFloat(expense.amount) > 9999999) {
            setError('Amount must be less than 9,999,999');
            return;
        }

        // If customType has value then the previous type in expense is cleared
        if (expense.type === 'Other' && customType) {
            expense.type = '';
        }

        //Checking that all the required fields are filled
        if (!expense.description || !expense.amount || !expense.date || !(expense.type || customType)) {
            setError('All fields are required');
            return;
        }

        setError('');
        //Above we are setting the expense.type to '' when the type is Other, if expense.type is empty then
        //custom type from the input text is taken
        onSubmit({ ...expense, type: expense.type || customType.trim() || 'Other' });
    };

    return (
        <motion.div className="form-container"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="expense-form">
                {/* Back Button */}
                <button type="button" onClick={handleBack} className="back-button">
                    Back
                    <img src="/back.png" alt="Back" />
                </button>

                {/* Error message */}
                {error && <p className="error-message">{error}</p>}

                {/* Description */}
                <div style={{ marginBottom: '15px' }}>
                    <label>Description<span>*</span>:</label>
                    <input
                        type="text"
                        name="description"
                        value={expense.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Amount */}
                <div style={{ marginBottom: '15px' }}>
                    <label>Amount<span>*</span>:</label>
                    <input
                        type="number"
                        name="amount"
                        value={expense.amount}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Date */}
                <div style={{ marginBottom: '15px' }}>
                    <label>Date<span>*</span>:</label>
                    <input
                        type="date"
                        name="date"
                        value={expense.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Type */}
                <div style={{ marginBottom: '15px' }}>
                    <label>Type<span>*</span>:</label>
                    <select name="type" value={expense.type} onChange={handleChange} required>
                        <option value="">Select type</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                    {/* When other is the type then a custom input is taken */}
                    {expense.type === 'Other' && (
                        <input
                            type="text"
                            value={customType}
                            onChange={handleCustomTypeChange}
                            placeholder="Enter custom type"
                        />
                    )}
                </div>

                {/* Submit Button */}
                <button type="submit">Save</button>
            </form>
        </motion.div>
    );
};

export default ExpenseForm;
