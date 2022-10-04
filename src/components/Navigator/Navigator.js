import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculteTotalExpenses } from "../../features/expenses/expensesSlice";
import { addIncome } from "../../features/income/incomeSlice";
import "./Navigator.scss";

export default function Navigator() {
  const [input, setInput] = useState("");
  const { income } = useSelector((store) => store.income);
  const { totalExpenses, expenseItems } = useSelector(
    (store) => store.expenses
  );
  const dispatch = useDispatch();

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIncome(input));
  };

  useEffect(() => {
    dispatch(calculteTotalExpenses());
  }, [expenseItems]);

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
      <div className="tabs__tab">
        <h2>Expenses</h2>
        <h2>{totalExpenses}</h2>
      </div>
      <div className="tabs__tab">
        <h2>Savings</h2>
        <h2>{income - totalExpenses}</h2>
      </div>
    </div>
  );
}
