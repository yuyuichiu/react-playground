import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

// Props: dataPoint (Chart Data Object)
function Chart(props) {
    let maxValue = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))
    
    return <div className="chart">
        {props.dataPoints.map((dataPoint, idx) => (
        <ChartBar 
            key={idx}
            value={dataPoint.value} 
            maxValue={maxValue}
            label={dataPoint.label}
        />))}
    </div>
}

export default Chart