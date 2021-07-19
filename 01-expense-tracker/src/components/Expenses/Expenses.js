import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from '../Expenses/ExpensesChart'
import Card from "../UI/Card";
import "./Expenses.css";

// Props: expenses (array)
function Expenses(props) {
  const [state, setState] = useState({
    year: "2021",
    expenses: props.expenses,
  });

  // Filter the expense array based on filter, responsive to state changes
  const filteredExpenses = props.expenses.filter((e) => {
    return e.date.getFullYear().toString() === state.year;
  });

  // Filter option passed from ExpenseFilter.js
  const filterChangeHandler = (choice) => {
    setState({ ...state, year: choice });
  };

  // The expense JSX render content
  let expensesContent =
    filteredExpenses.length === 0 ? (
      <p className="no-expense">No expense found</p>
    ) : (
      filteredExpenses.map((e, idx) => (
        <li key={idx}>
          <ExpenseItem
            date={e.date}
            title={e.title}
            amount={e.amount}
          ></ExpenseItem>
        </li>
      ))
    );

  return (
    <div>
      <ExpenseFilter
        selected={state.year}
        onFilterChange={(i) => filterChangeHandler(i)}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <Card>
        <ul>{expensesContent}</ul>
      </Card>
    </div>
  );
}

export default Expenses;
