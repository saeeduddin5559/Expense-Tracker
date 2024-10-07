import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './ExpenseSlice';

const store = configureStore({
  reducer: {
    expenseData: expenseReducer
  }
});

export default store;
