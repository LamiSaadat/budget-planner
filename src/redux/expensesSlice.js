import { createSlice } from "@reduxjs/toolkit";

function nextItem(item) {
  const maxId = item.reduce((maxId, item) => Math.max(item.id, maxId), -1);
  return maxId + 1;
}

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [{}],
  },
  reducers: {
    expenseAdded: (state, action) => {
      return {
        id: nextItem(state),
        item: action.payload,
        amount: action.payload,
      };
    },
  },
});

export const { expenseAdded } = expensesSlice.actions;

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
