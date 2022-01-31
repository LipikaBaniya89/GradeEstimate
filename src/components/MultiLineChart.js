import React, { Component } from 'react'
import Chart from 'react-google-charts'

const LineData = [
  ['x', 'grade'],
  [0, 0.5],
  [1, 1.5],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
]

const LineChartOptions = {
  hAxis: {
    title: 'Semester',
  },
  vAxis: {
    title: 'Grade',
  },
  series: {
    1: { curveType: 'function' },
  },
}

class MultiLineChart extends Component {
  render() {
    return (
      <div className="container mt-5" style={{marginLeft:"350px"}}>
        <h2>Grade Line Chart</h2>
        <Chart
          width={'600px'}
          height={'410px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}

export default MultiLineChart