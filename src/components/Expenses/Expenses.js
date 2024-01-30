import ExpenseItem from "./ExpenseItem";
import './expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const expenseData = props.expenseData

    const [filterYear, setFilterYear] = useState('2023');

    const selectedFilterYearHandler = (year) => {
        setFilterYear(year);
    }





    return (
        <Card className='expenses'>
            <ExpensesFilter
                /* Selected year from ExpensesFilter */
                selectedFilterYear={selectedFilterYearHandler}
            />
            {expenseData.map(expense => {
                if (filterYear == expense.date.getFullYear()) {
                    return (<ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                        key={expense.id}
                    />)
                }

            })}

        </Card>
    )

}

export default Expenses;