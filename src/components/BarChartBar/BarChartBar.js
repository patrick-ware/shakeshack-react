import React from 'react';
import './BarChartBar.css';

function BarChartBar(props) {
  return (
    <div 
      className="BarChart-bar"
      key={props.key}
      style ={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default BarChartBar;
