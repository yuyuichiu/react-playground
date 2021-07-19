import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.52,
          date: new Date(2020, 7, 14),
        },
        {
          id: "e2",
          title: "New TV",
          amount: 799.49,
          date: new Date(2021, 2, 12),
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ],
    };
    this.addExpenseHandler = this.addExpenseHandler.bind(this);
  }

  // Triggered from NewExpense.js
  addExpenseHandler(expense) {
    let newExpenses = this.state.expenses.slice();
    newExpenses.unshift(expense);
    this.setState({ expenses: newExpenses });
  }

  render() {
    return (
      <div>
        <NewExpense onAddExpense={this.addExpenseHandler} />
        <Expenses expenses={this.state.expenses} />
      </div>
    );
  }
}
