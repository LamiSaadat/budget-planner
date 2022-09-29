import React from "react";
import "./ExpenseItem.scss";
import { useDispatch } from "react-redux";

const ExpenseItem = ({ id, item, amount }) => {
  return (
    <div className="expenses">
      <p className="expenses__item">{item}</p>
      <p className="expenses__amount">{amount}</p>
    </div>
  );
};

export default ExpenseItem;
