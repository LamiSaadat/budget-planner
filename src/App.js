import "./App.scss";
import ExpenseDisplay from "./components/ExpenseDisplay/ExpenseDisplay";
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import IncomeDisplay from "./components/IncomeDisplay/IncomeDisplay";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExpenseItems } from "./features/expenses/expensesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseItems());
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigator />
      <ExpenseDisplay />
      {/* <IncomeDisplay /> */}
    </div>
  );
}

export default App;
