import React from "react";
import { useDispatch } from "react-redux";

const ExpenseItem = ({ id, item, amount }) => {
  return (
    <>
      <h3 className="expenses__item">Item</h3>
      <p className="expenses__item">{item}</p>
      <h3 className="expenses__amount">Amount</h3>
      <p className="expenses__amount">{amount}</p>
    </>
  );
};

export default ExpenseItem;
