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
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form__title">Add Income</h2>
        <label className="form__label">Add Income</label>
        <input
          className="form__input form__input-income"
          name="income"
          value={input.income}
          onChange={handleChange}
        ></input>

        <button className="form__btn">Add</button>
      </form>
    )
  );
}
