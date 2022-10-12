import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculteTotalExpenses } from "../../features/expenses/expensesSlice";
import { addIncome, getIncome } from "../../features/income/incomeSlice";
import IncomeForm from "../IncomeForm/IncomeForm";
import "./Header.scss";

export default function Header() {
  const [input, setInput] = useState({ income: "" });
  const [showForm, setShowForm] = useState(true);
  const { income } = useSelector((store) => store.income);
  const { totalExpenses, expenseItems } = useSelector(
    (store) => store.expenses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculteTotalExpenses());
  }, [expenseItems, dispatch]);

  let savings = String(income.income - totalExpenses);

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
    <div>
      <h1>Expense Tracker</h1>
      <div className="tabs">
        <div className="tabs__tab">
          <h2>Income</h2>
          <h2>{income.income}</h2>
          <button onClick={handleEditBtn}>Edit</button>
        </div>

        <div className="tabs__tab">
          <h2>Expenses</h2>
          <h2>{totalExpenses}</h2>
        </div>
        <div className="tabs__tab">
          <h2>Savings</h2>
          <h2>{savings}</h2>
        </div>
      </div>
      <IncomeForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showForm={showForm}
        input={input}
      />
    </div>
  );
}
