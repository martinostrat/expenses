import './expenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = (props) => {
        console.log('Clicked!');
        setTitle(`Updated by click ${title}`);
        console.log(title);
    }

    return (
        <div key={props.title} className='expense-item card'>
            <ExpenseDate
                date={props.date}
            />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me!</button>
        </div>
    );
}

export default ExpenseItem;