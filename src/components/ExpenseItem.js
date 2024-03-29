import './expenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className='expense-item card'>
            <ExpenseDate
                date={props.date}
            />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;