import ExpenseItem from "./ExpenseItem";
import './expenses.css';

function Expenses(props) {
    const expenseData = props.expenseData
    console.log(props)

    return (
        <div className="expenses">

            {expenseData.map(expense => {
                return (<ExpenseItem
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                />)
            })}

        </div >
    )

}

export default Expenses;