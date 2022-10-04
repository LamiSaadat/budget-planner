import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, getIncome } from "../../features/income/incomeSlice";
import "./IncomeDisplay.scss";

export default function IncomeDisplay() {
  const [incomeInput, setIncomeInput] = useState("");
  const { income } = useSelector((store) => store.income);
  const dispatch = useDispatch();

  const handleChange = (e) => setIncomeInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addIncome(incomeInput))
      .unwrap()
      .then(() => {
        dispatch(getIncome());
      })
      .catch((err) => console.log(err));
    console.log(incomeInput);
  };

  return (
    <div className="tabs__tab">
      <h2>Income</h2>
      <h2>{income.income}</h2>
      <form onSubmit={handleSubmit} className="income__add-form">
        <input
          name="income"
          value={incomeInput}
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
