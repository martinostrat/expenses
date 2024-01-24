import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
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

  return (
    <div className="App">
      <Expenses
        expenseData={expenses}
      />


    </div>
  );
}

export default App;
