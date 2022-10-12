import React from "react";
import { useSelector } from "react-redux";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpenseDisplay.scss";

export default function ExpenseDisplay() {
  const { expenseItems } = useSelector((store) => store.expenses);

  return (
    <div className="expenses-container">
      <div className="expenses-container__items">
        {expenseItems.map((item, index) => {
          return <ExpenseItem key={index} {...item} />;
        })}
      </div>
      <AddExpenseForm />
    </div>
  );
}
