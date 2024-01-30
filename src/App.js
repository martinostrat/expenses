import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const BASE_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2023, 0, 19),
    title: 'New Book',
    amount: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024, 0, 19),
    title: 'Soup',
    amount: 2.49
  },
  {
    id: 'id3',
    date: new Date(2024, 0, 25),
    title: 'Onion',
    amount: 0.99
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(BASE_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    });
  }

  return (
    <div className="App">
      <NewExpense
        onAddExpense={addExpenseHandler}
      />
      <Expenses
        expenseData={expenses}
      />


    </div>
  );
}

export default App;
