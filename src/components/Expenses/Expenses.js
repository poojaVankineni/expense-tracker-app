import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props) {
  return (
    <div className="expenses">

      {props.expenses.map((eachExpense) => {

        return (
          <ExpenseItem
            title={eachExpense.title}
            amount={eachExpense.amount}
            date={eachExpense.date}
          ></ExpenseItem>
        );
    })}
    </div>
  );
}

export default Expenses;
