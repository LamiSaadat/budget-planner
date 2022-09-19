import "./App.scss";
import ExpenseDisplay from "./components/ExpenseDisplay/ExpenseDisplay";
import Header from "./components/Header/Header";
import IncomeDisplay from "./components/IncomeDisplay/IncomeDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ExpenseDisplay /> */}
      <IncomeDisplay />
    </div>
  );
}

export default App;
