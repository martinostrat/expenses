import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const yearFilterHandler = (event) => {
        const selectedYear = event.target.value;
        props.selectedFilterYear(selectedYear);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select defaultValue={'2024'} onChange={yearFilterHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;