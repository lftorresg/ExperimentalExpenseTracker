import React, { useState } from 'react'

import './expenses.css'
import ExpensesFilter from './expensesFilter';
import Card from '../UI/card';
import ExpenseList from './expensesList';
import ExpensesChart from './expensesChart';

function Expenses(props) {
    const [year,
        setYear] = useState('2021');

    const changeHandler = selectYear => {
        setYear(selectYear);
    };

    const selectExpenses = props.exp.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter select={year} onChangeYear={changeHandler} />
                <ExpensesChart expense={selectExpenses} />
                <ExpenseList exp={selectExpenses} />
            </Card>
        </div>
    );
};
export default Expenses;