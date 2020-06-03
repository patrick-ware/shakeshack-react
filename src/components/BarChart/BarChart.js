import React from 'react';
import './BarChart.css';

function BarChart(props) {
  return (
    <div className="BarChart">
      {props.children}
    </div>
  );
}

export default BarChart;
