import React from "react";

import ChartBar from "./chartBar";
import './chart.css'

function Chart(props) {

    const dataPointValue = props
        .data
        .map(dataPoint => dataPoint.value);
    const maximum = Math.max(...dataPointValue)

    return (
    <div className="chart">
        {props
            .data
            .map((dataPoint) => (<ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maximum}
                label={dataPoint.label}/>))}
    </div>
    );
};

export default Chart;