// import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

// Props: title, date, amount
function ExpenseItem(props) {
  return (
  <div className='expense-item'>
    <ExpenseDate date={props.date}></ExpenseDate>
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <p className='expense-item__price'>{`$${props.amount}`}</p>
    </div>
  </div>
  )
}

export default ExpenseItem

// shift+alt+f to automatically format your code