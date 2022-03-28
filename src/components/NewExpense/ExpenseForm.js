import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function enteredTitleHandler(event){
        setEnteredTitle(event.target.value);
    }

    function enteredDateHandler(event){
        setEnteredDate(event.target.value);
    }

    function amountHandler(event){
        setEnteredAmount(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault(); //preventDefault is built-in JS Functionality
        // It prevents the page from not sending request to server on form submission.
        // So, the page will not re-load now.

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        
        }

        props.onSubmitExpenseData(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');



    }

    return(
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>enteredTitle</label>
                <input type='text' value={enteredTitle} onChange={enteredTitleHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>enteredDate</label>
                <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={enteredDateHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>AddExpense</button>
        </div>
        
    </form>);
}


export default ExpenseForm;