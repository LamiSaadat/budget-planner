import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./features/expenses/expensesSlice";

const store = configureStore({ reducer: { expenses: expensesReducer } });

export default store;
