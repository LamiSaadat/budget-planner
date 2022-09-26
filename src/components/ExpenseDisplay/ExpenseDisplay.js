import React from "react";
import { useSelector } from "react-redux";

import "./ExpenseDisplay.scss";

export default function ExpenseDisplay() {
  const { expenses } = useSelector((state) => state.expenses);
  console.log(expenses);

  return (
    <div className="expenses">
      <h2>Expenses</h2>
      <div className="expenses__details">
        <h3 className="expenses__item">Item</h3>
        <p className="expenses__item">{expenses[0].item}</p>
        <h3 className="expenses__amount">Amount</h3>
        <p className="expenses__amount">{expenses[0].amount}</p>
        <div>
          Item
          <input></input>
        </div>
        <div>
          Amount
          <input></input>
        </div>
      </div>
    </div>
  );
}
