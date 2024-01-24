import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

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
      <ExpenseItem
        expenseData={expenses[0]}
      />
      <ExpenseItem
        expenseData={expenses[1]}
      />
    </div>
  );
}

export default App;
