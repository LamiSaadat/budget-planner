import React from "react";
import { useSelector } from "react-redux";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpenseDisplay.scss";

export default function ExpenseDisplay() {
  const { expenseItems } = useSelector((store) => store.expenses);

  return (
    <div className="expenses">
      <h2>Expenses</h2>
      <div className="expenses__details">
        {expenseItems.map((item) => {
          return <ExpenseItem key={item.id} {...item} />;
        })}
      </div>
      <AddExpenseForm />
    </div>
  );
}
