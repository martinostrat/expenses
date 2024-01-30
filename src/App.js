import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      date: new Date(),
      title: 'New Book',
      price: 30.99
    },
    {
      date: new Date(),
      title: 'Soup',
      price: 2.49
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log('app.js')
    console.log(expense)
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
