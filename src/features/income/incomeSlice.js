import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.API_URL;
const incomeEndpoint = `${url}/income`;

const initialState = {
  income: 0,
  isLoading: true,
};

export const getIncome = createAsyncThunk("income/getIncome", async () => {
  try {
    const res = await axios.get(incomeEndpoint);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const addIncome = createAsyncThunk(
  "income/addIncome",
  async (newIncome, { rejectWithValue }) => {
    try {
      const res = await axios.put(incomeEndpoint, newIncome);
      return res.data;
    } catch (error) {
      if (!error.reponse) {
        throw error;
      }
      return rejectWithValue(error.reponse.data);
    }
  }
);

export const incomeSlice = createSlice({
  name: "income",
  initialState,
  // reducers: {
  //   addIncome: (state, action) => {
  //     state.income = action.payload;
  //   },
  //   reduceIncome: (state, action) => {
  //     state.income = action.payload;
  //   },
  // },
  extraReducers: {
    [getIncome.pending]: (state) => {
      state.isLoading = true;
    },
    [getIncome.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.income = action.payload;
    },
    [getIncome.rejected]: (state) => {
      state.isLoading = false;
    },
    [addIncome.fulfilled]: (state, action) => {
      state.income = action.payload;
    },
  },
});

// export const { addIncome, reduceIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
