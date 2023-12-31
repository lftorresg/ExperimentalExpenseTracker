import React from "react";

import Chart from "../Chart/chart";

function ExpensesChart(props) {

    const chartData = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Out', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const exp of props.expense) {
        const expenseMonth = exp.date.getMonth();
        chartData[expenseMonth].value += exp.amount;
    }

    return <Chart data={chartData} />;
};

export default ExpensesChart;