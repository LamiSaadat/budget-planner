import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../../features/income/incomeSlice";
import "./Navigator.scss";

export default function Navigator() {
  const [input, setInput] = useState("");
  const { income } = useSelector((store) => store.income);
  const dispatch = useDispatch();

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIncome(input));
  };

  return (
    <div className="tabs">
      <div className="tabs__tab">
        <h2>Income</h2>
        {handleSubmit && <h2>{income}</h2>}
        <form onSubmit={handleSubmit} className="income__add-form">
          <input name="income" value={input} onChange={handleChange}></input>
          <button>Add</button>
        </form>
      </div>
      <h2 className="tabs__tab">Expenses</h2>
      <h2 className="tabs__tab">Savings</h2>
    </div>
  );
}
