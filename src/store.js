import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./redux/expensesSlice";

const store = configureStore({ reducer: expensesReducer });

export default store;
