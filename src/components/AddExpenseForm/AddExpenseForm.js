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
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form__title">Add Expense</h2>
      <div className="form__form">
        <div className="form__input-container">
          <label className="form__label">Item</label>
          <input
            className="form__input"
            name="item"
            value={input.item}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form__input-container">
          <label className="form__label">Amount</label>
          <input
            className="form__input"
            name="amount"
            value={input.amount}
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <button className="form__btn">Add</button>
    </form>
  );
}
