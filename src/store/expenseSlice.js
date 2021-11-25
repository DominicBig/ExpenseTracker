import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    addTransaction(state, action) {
      const newTransaction = {
        id: action.payload.id,
        text: action.payload.text,
        amount: +action.payload.amount,
      };
      state.transactions.push(newTransaction);
    },
    deleteTransaction(state, action) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice;
