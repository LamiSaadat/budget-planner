import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculteTotalExpenses } from "../../features/expenses/expensesSlice";
import IncomeDisplay from "../IncomeDisplay/IncomeDisplay";
import "./Header.scss";

export default function Header() {
  const { income } = useSelector((store) => store.income);
  const { totalExpenses, expenseItems } = useSelector(
    (store) => store.expenses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculteTotalExpenses());
  }, [expenseItems, dispatch]);

  let savings = String(income.income - totalExpenses);
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="tabs">
        <IncomeDisplay />
        <div className="tabs__tab">
          <h2>Expenses</h2>
          <h2>{totalExpenses}</h2>
        </div>
        <div className="tabs__tab">
          <h2>Savings</h2>
          <h2>{savings}</h2>
        </div>
      </div>
    </div>
  );
}
