import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addExpenseItem,
  getExpenseItems,
} from "../../features/expenses/expensesSlice";
import "./AddExpenseForm.scss";

export default function AddExpenseForm() {
  const [input, setInput] = useState({ item: "", amount: "" });
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addExpenseItem(input))
      .unwrap()
      .then(() => {
        dispatch(getExpenseItems());
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="expensesForm">
      <div className="expensesForm__form">
        <div className="expensesForm__label">
          Item
          <input
            className="expensesForm__input"
            name="item"
            value={input.item}
            onChange={handleChange}
          ></input>
        </div>
        <div className="expensesForm__label">
          Amount
          <input
            className="expensesForm__input"
            name="amount"
            value={input.amount}
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <button className="expensesForm__btn">Add Expense</button>
    </form>
  );
}
