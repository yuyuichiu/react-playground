import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const saveExpenseDataHandler = (expenseData) => {
        // Passing data up to App.js
        props.onAddExpense(expenseData);
    }

    return (<div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>)
}

export default NewExpense