import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8080";

// function nextItem(item) {
//   const maxId = item.reduce((maxId, item) => Math.max(item.id, maxId), -1);
//   return maxId + 1;
// }

const initialState = {
  expenseItems: [],
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

export const addExpenseItem = createAsyncThunk(
  "expenses/addExpenseItem",
  async (newItem) => {
    const response = await axios.post(url, newItem);
    return response.data;
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
    [addExpenseItem.fulfilled]: (state, action) => {
      state.expenseItems.push(action.payload);
    },
  },
});

export default expensesSlice.reducer;
