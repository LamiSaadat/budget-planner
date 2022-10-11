import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8080/expenses";

const initialState = {
  expenseItems: [],
  totalExpenses: 0,
  isLoading: true,
};

export const getExpenseItems = createAsyncThunk(
  "expenses/getExpenseItems",
  async () => {
    try {
      const res = await axios(url);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addExpenseItem = createAsyncThunk(
  "expenses/addExpenseItem",
  async (newItem, { rejectWithValue }) => {
    console.log(newItem);
    try {
      const response = await axios.post(url, newItem);

      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const editExpenseItem = createAsyncThunk(
  "expenses/editExpenseItem",
  async ({ id, item, amount }) => {
    console.log(id, item, amount);
    try {
      const response = await axios.put(`${url}/${id}`, { id, item, amount });

      return response.data;
    } catch (err) {
      return err;
    }
  }
);

export const deleteExpenseItem = createAsyncThunk(
  "expenses/deleteExpenseItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    calculteTotalExpenses: (state) => {
      let total = 0;

      state.expenseItems.forEach((item) => (total += Number(item.amount)));

      state.totalExpenses = total;
    },
  },
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
    [addExpenseItem.pending]: (state) => {
      state.isLoading = true;
    },
    [addExpenseItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.expenseItems = action.payload;
    },
    [addExpenseItem.rejected]: (state) => {
      state.isLoading = false;
    },
    [editExpenseItem.pending]: (state) => {
      state.isLoading = true;
    },
    [editExpenseItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.expenseItems = action.payload;
    },
    [editExpenseItem.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteExpenseItem.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteExpenseItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.expenseItems = action.payload;
    },
    [deleteExpenseItem.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { calculteTotalExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;
