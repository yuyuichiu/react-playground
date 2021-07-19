import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    displayContent: false,
  });

  const changeTitleHandler = (event) => {
    setUserInput((prevState) => {
      // Always include previous state data while setting new state
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const changeAmountHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const changeDateHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Pass the data to NewExpense.js
    const expenseData = {
      id: Math.floor(Math.random() * 10000000).toString(),
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    // Clear input by utilizing two way binding
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };

  // Logic to show expense form
  const displayHandler = () => {
    setUserInput((prevState) => {
      let display = userInput.displayContent;
      return { ...prevState, displayContent: !display };
    });
  };

  return (userInput.displayContent ? (
  <form className="new-expense" onSubmit={submitHandler}>
  <div className="new-expense__controls">
    <div className="new-expense__control">
      <label>Title</label>
      <input
        type="text"
        value={userInput.enteredTitle}
        onChange={changeTitleHandler}
        required={true}
      />
    </div>
    <div className="new-expense__control">
      <label>Amount</label>
      <input
        type="number"
        value={userInput.enteredAmount}
        onChange={changeAmountHandler}
        min="0.01"
        step="0.01"
        required={true}
      />
    </div>
    <div className="new-expense__control">
      <label>Date</label>
      <input
        type="date"
        value={userInput.enteredDate}
        onChange={changeDateHandler}
        min="2019-01-01"
        max="2099-12-31"
        required={true}
      />
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={displayHandler}>Cancel</button>
      <button type="submit" class="submitBtn">Add Expense</button>
    </div>
  </div>
  </form>
  ) : (<div className="new-expense-hide">
  <button type="submit" className="add-btn" onClick={displayHandler}>
    Add Expense
  </button>
    </div>));
}

export default ExpenseForm;


  /* <form className="new-expense" onSubmit={submitHandler}>
<div className="new-expense__controls">
  <div className="new-expense__control">
    <label>Title</label>
    <input
      type="text"
      value={userInput.enteredTitle}
      onChange={changeTitleHandler}
      required={true}
    />
  </div>
  <div className="new-expense__control">
    <label>Amount</label>
    <input
      type="number"
      value={userInput.enteredAmount}
      onChange={changeAmountHandler}
      min="0.01"
      step="0.01"
      required={true}
    />
  </div>
  <div className="new-expense__control">
    <label>Date</label>
    <input
      type="date"
      value={userInput.enteredDate}
      onChange={changeDateHandler}
      min="2019-01-01"
      max="2099-12-31"
      required={true}
    />
  </div>
  <div className="new-expense__actions">
    <button type="submit">Add Expense</button>
  </div>
</div>
</form> */

