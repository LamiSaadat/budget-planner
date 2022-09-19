import React from "react";
import "./ExpenseDisplay.scss";

export default function ExpenseDisplay() {
  return (
    <div className="expenses">
      <h2>Expenses</h2>
      <div className="expenses__details">
        <h3 className="expenses__item">Item</h3>
        <h3 className="expenses__amount">Amount</h3>
      </div>
    </div>
  );
}
