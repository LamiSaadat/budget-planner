import React from "react";
import "./IncomeForm.scss";

export default function IncomeDisplay({
  handleChange,
  handleSubmit,
  input,
  showForm,
}) {
  return (
    showForm && (
      <form onSubmit={handleSubmit} className="income__add-form">
        <input
          name="income"
          value={input.income}
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </form>
    )
  );
}
