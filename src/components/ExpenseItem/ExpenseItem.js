import React from "react";
import "./ExpenseItem.scss";
import { useDispatch } from "react-redux";
import {
  deleteExpenseItem,
  getExpenseItems,
} from "../../features/expenses/expensesSlice";

const ExpenseItem = ({ id, item, amount }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteExpenseItem(id))
      .unwrap()
      .then(() => {
        dispatch(getExpenseItems());
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="expenses">
      <p className="expenses__item">{item}</p>
      <p className="expenses__amount">{amount}</p>
      <button onClick={handleClick}>remove</button>
    </div>
  );
};

export default ExpenseItem;
