import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./redux/expensesSlice";

const store = configureStore({ reducer: { expenses: expensesReducer } });

export default store;
