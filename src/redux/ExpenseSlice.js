import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/expenses';

// Async Thunks for API Calls
export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const addExpense = createAsyncThunk('expenses/addExpense', async (expense) => {
  const response = await axios.post(apiUrl, expense);
  return response.data;
});

export const editExpense = createAsyncThunk('expenses/editExpense', async ({ id, updatedExpense }) => {
  const response = await axios.put(`${apiUrl}/${id}`, updatedExpense);
  return response.data;
});

export const deleteExpense = createAsyncThunk('expenses/deleteExpense', async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
  return id;
});

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all expenses
    builder.addCase(fetchExpenses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchExpenses.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // Add a new expense
    builder.addCase(addExpense.fulfilled, (state, action) => {
      state.expenses.push(action.payload);
    });

    // Edit an expense
    builder.addCase(editExpense.fulfilled, (state, action) => {
      const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    });

    // Delete an expense
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    });
  }
});

export default expenseSlice.reducer;
