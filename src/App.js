import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 267, date: new Date(2020, 5, 6) },
    { title: "Books", amount: 360, date: new Date(2021, 6, 14) },
    { title: "Groceries", amount: 410, date: new Date(2022, 1, 29) },
    { title: "Vacation", amount: 250, date: new Date(2008, 8, 25) },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
