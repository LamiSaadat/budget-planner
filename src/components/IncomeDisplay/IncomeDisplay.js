import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, getIncome } from "../../features/income/incomeSlice";
import "./IncomeDisplay.scss";

export default function IncomeDisplay() {
  const [input, setInput] = useState({ income: "" });
  const [showForm, setShowForm] = useState(true);
  const { income } = useSelector((store) => store.income);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setInput(() => {
      return { [e.target.name]: e.target.value };
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addIncome(input))
      .unwrap()
      .then(() => {
        dispatch(getIncome());
      })
      .catch((err) => console.log(err));

    setShowForm(false);
  };

  const handleEditBtn = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="tabs__tab">
      <h2>Income</h2>
      <h2>{income.income}</h2>
      {showForm && (
        <form onSubmit={handleSubmit} className="income__add-form">
          <input
            name="income"
            value={input.income}
            onChange={handleChange}
          ></input>
          <button>Add</button>
        </form>
      )}
      <button onClick={handleEditBtn}>Edit</button>
    </div>
  );
}
