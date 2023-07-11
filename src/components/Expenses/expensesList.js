import React from "react";

import './expensesList.css'
import ExpenseItem from "./expenseItem";


function ExpenseList(props) {
    if (props.exp.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found!</h2>
    };

    return <ul className="expenses-list">
        {props.exp.map((expenses) => (
            <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
            />
        ))}
    </ul>
};

export default ExpenseList;