import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(){

   const [enteredTitle,setEnteredTitle] = useState('')
   const [enteredDate, setEnteredDate] = useState('')
   const [enteredAmount, setEnteredAmount] = useState('')


   const titleChangedHandler = (event) => {
       console.log(event.target.value)
       setEnteredTitle(event.target.value)
   }

   const dateChangedHandler = (event) => {
    console.log(event.target.value)
    setEnteredDate(event.target.value)
  }

  const amountChangedHandler = (event) => {
    console.log(event.target.value)
      setEnteredAmount(event.target.value)
  }

  const 

    return(
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangedHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangedHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangedHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>AddExpense</button>
        </div>
        
    </form>);
}


export default ExpenseForm;