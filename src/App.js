import "./App.scss";
import ExpenseDisplay from "./components/ExpenseDisplay/ExpenseDisplay";
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import IncomeDisplay from "./components/IncomeDisplay/IncomeDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      {/* <ExpenseDisplay /> */}
      <IncomeDisplay />
    </div>
  );
}

export default App;
