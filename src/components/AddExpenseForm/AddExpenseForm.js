import React, { useState } from "react";
import { useDispatch } from "react-redux";

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

  // const handleKeyDown = (e) => {
  //   const trimmedText = e.target.value.trim();

  //   if (e.key === "Enter" && trimmedText) {
  //     dispatch({ type: "expenses/expensesAdded", payload: trimmedText });
  //     console.log(input);
  //     // setInput("");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const logger = console.log(input);

    dispatch({ type: "expenses/expensesAdded", payload: logger });
    // setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Item
        <input
          name="item"
          value={input.item}
          onChange={handleChange}
          // onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div>
        Amount
        <input
          name="amount"
          value={input.amount}
          onChange={handleChange}
          // onKeyDown={handleKeyDown}
        ></input>
      </div>
      <button>Add Expense</button>
    </form>
  );
}
