import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculteTotalExpenses } from "../../features/expenses/expensesSlice";
import IncomeDisplay from "../IncomeDisplay/IncomeDisplay";
import "./Navigator.scss";

export default function Navigator() {
  const { income } = useSelector((store) => store.income);
  const { totalExpenses, expenseItems } = useSelector(
    (store) => store.expenses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculteTotalExpenses());
  }, [expenseItems, dispatch]);

  return (
    <div className="tabs">
      <IncomeDisplay />
      <div className="tabs__tab">
        <h2>Expenses</h2>
        <h2>{totalExpenses}</h2>
      </div>
      <div className="tabs__tab">
        <h2>Savings</h2>
        <h2>{income.income - totalExpenses}</h2>
      </div>
    </div>
  );
}
