import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const SubmitExpenseDataHandler = (newExpense) => {
        const expense = {
        ...newExpense,
        id  :  Math.random.toString
        }
        props.onAddExpense(expense);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSubmitExpenseData={SubmitExpenseDataHandler}/>
        </div>
    );

}

export default NewExpense;