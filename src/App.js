import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: 'e1', title: "Car Insurance", amount: 267, date: new Date(2020, 5, 6) },
    { id: 'e2', title: "Books", amount: 360, date: new Date(2021, 6, 14) },
    { id: 'e3', title: "Groceries", amount: 410, date: new Date(2022, 1, 29) },
    { id: 'e4', title: "Vacation", amount: 250, date: new Date(2008, 8, 25) },
  ];

  const AddExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
