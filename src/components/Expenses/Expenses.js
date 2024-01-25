import ExpenseItem from "./ExpenseItem";
import './expenses.css';
import Card from "../UI/Card";

function Expenses(props) {
    const expenseData = props.expenseData

    return (
        <Card className='expenses'>
           {/*  <ExpenseItem expenseData={expenseData[0]} /> */}

            {expenseData.map(expense => {
                return (<ExpenseItem
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                    />)
                })} 

        </Card>
    )

}

export default Expenses;