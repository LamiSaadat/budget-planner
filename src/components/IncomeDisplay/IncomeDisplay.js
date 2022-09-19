import React from "react";
import "./IncomeDisplay.scss";

export default function IncomeDisplay() {
  return (
    <div className="income">
      <h2>Income</h2>
      <div className="income__details">
        <h3 className="income__month">Month</h3>
        <h3 className="income__amount">Amount</h3>
      </div>
    </div>
  );
}
