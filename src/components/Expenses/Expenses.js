import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("");

  const YearSelectionHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onYearSelection={YearSelectionHandler}
      />
      {props.expenses.map((eachExpense) => {
        return (
          <ExpenseItem
            title={eachExpense.title}
            amount={eachExpense.amount}
            date={eachExpense.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
