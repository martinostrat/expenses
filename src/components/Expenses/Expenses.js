import ExpenseItem from "./ExpenseItem";
import './expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState(2024);

    const selectedFilterYearHandler = (year) => {
        setFilterYear(year);
    }


    const filteredExpenses = props.expenseData.filter((expense) => {
        return expense.date.getFullYear() == filterYear
    })


    return (
        <Card className='expenses'>
            <ExpensesFilter
                /* Selected year from ExpensesFilter */
                selectedFilterYear={selectedFilterYearHandler}
            />


            {
                filteredExpenses.length === 0 && <p>No expenses found!</p>
            }
            {
                filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
                    return (<ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                        key={expense.id}
                    />)
                })
            }

            {/* {expenseData.map(expense => {
                if (filterYear == expense.date.getFullYear()) {
                    console.log(typeof filterYear)
                    console.log(typeof expense.date.getFullYear())
                    return (<ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                        key={expense.id}
                    />)
                }

            })} */}

        </Card>
    )

}

export default Expenses;