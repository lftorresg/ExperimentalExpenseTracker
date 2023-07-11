import React, { useState } from 'react'

import Expenses from "./components/Expenses/expenses";
import NewExpense from './components/NewExpense/newExpense';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Phone Case',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  }, {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  }, {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  }, {
    id: 'e4',
    title: 'Gaming Chair',
    amount: 299.99,
    date: new Date(2021, 5, 12)
  }
];

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses exp={expenses} />
    </div>
  );
}

export default App;