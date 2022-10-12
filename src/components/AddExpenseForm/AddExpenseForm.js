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
      <h2 className="expensesForm__title">Add Expense</h2>
      <div className="expensesForm__form">
        <div className="expensesForm__input-container">
          <label className="expensesForm__label label">Item</label>
          <input
            className="expensesForm__input input-field"
            name="item"
            value={input.item}
            onChange={handleChange}
          ></input>
        </div>
        <div className="expensesForm__input-container">
          <label className="expensesForm__label label">Amount</label>
          <input
            className="expensesForm__input input-field"
            name="amount"
            value={input.amount}
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <button className="expensesForm__btn form-btn">Add</button>
    </form>
  );
}
