import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function ExpensesItems() {
  const [input, setInput] = useState({ item: "", amount: "" });
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
    });

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();

    if (e.key === "Enter" && trimmedText) {
      dispatch({ type: "expenses/expensesAdded", payload: trimmedText });
      console.log(input);
      // setInput("");
    }
  };

  return (
    <>
      <div>
        Item
        <input
          name="item"
          value={input.item}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div>
        Amount
        <input
          name="amount"
          value={input.amount}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
    </>
  );
}
