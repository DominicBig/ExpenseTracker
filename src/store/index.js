import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expenseSlice";

const store = configureStore({
  reducer: {
    transaction: expenseSlice.reducer,
  },
});

export default store;