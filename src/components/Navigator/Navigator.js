import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Navigator.scss";

export default function Navigator() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="tabs">
      <div className="tabs__tab">
        <h2>Income</h2>
        <form>
          <input name="income" value={input} onChange={handleChange}></input>
          <button>Add</button>
        </form>
      </div>
      <h2 className="tabs__tab">Expenses</h2>
      <h2 className="tabs__tab">Savings</h2>
    </div>
  );
}
