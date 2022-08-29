import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const yearChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler} >
                    <option type='text' value='2022'>2022</option>
                    <option type='text' value='2021'>2021</option>
                    <option type='text' value='2020'>2020</option>
                    <option type='text' value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;