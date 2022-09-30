import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./features/expenses/expensesSlice";
import incomeRedcer from "./features/income/incomeSlice";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    income: incomeRedcer,
  },
});

export default store;
