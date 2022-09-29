import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8080";

// function nextItem(item) {
//   const maxId = item.reduce((maxId, item) => Math.max(item.id, maxId), -1);
//   return maxId + 1;
// }

const initialState = {
  expenseItems: [],
  expenseAmount: 0,
  isLoading: true,
};

export const getExpenseItems = createAsyncThunk(
  "expenses/getExpenseItems",
  async () => {
    try {
      const res = await axios(url);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  extraReducers: {
    [getExpenseItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getExpenseItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.expenseItems = action.payload;
    },
    [getExpenseItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default expensesSlice.reducer;

// function addExpenseItem(item) {
//   return {
//     type: "ADD_EXPENSES",
//     payload: item,
//   };
// }

// // function removeExpensesItem() {
// //   return {
// //     type: "REMOVE_FAVORITE_THING",
// //   };
// // }

// function sumAllExpenses() {
//   return {
//     type: "SUM_EXPENSES",
//   };
// }

// const intialState = {
//   expenses: [{ item: null, amount: null }],
// };

// function expensesReducer(state = intialState, action) {
//   switch (action.type) {
//     case "ADD_EXPENSES":
//       return [...state, action.payload];
// case "REMOVE_EXPENSES": {
//   const updatedArr = expenses.filter(
//     (expense) => expense !== action.payload.toLowerCase()
//   );
//   return updatedArr;
// }
//     case "SUM_EXPENSES":
//       return
//     default:
//       return state;
//   }
// }
