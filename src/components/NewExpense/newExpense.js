import React, { useState } from 'react';

import ExpenseForm from './expenseForm';
import './newExpense.css';

function NewExpense(props) {

    const [editing, setEditing] = useState(false);

    const saveExpenseHandler = (newExpense) => {
        const expenseData = {
            ...newExpense,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const editHandler = () => {
        setEditing(true);
    }

    const stopEditHandler = () => {
        setEditing(false);
    }

    return (
        <div className='new-expense'>
            {!editing && (
                <button onClick={editHandler}>Add New Expense</button>
            )}
            {editing && (
                <ExpenseForm
                    onSaveExpense={saveExpenseHandler}
                    onCancel={stopEditHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;