import "./App.scss";
import ExpenseDisplay from "./components/ExpenseDisplay/ExpenseDisplay";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseDisplay />
    </div>
  );
}

export default App;
