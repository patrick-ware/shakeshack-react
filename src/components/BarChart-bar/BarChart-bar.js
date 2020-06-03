import React from 'react';
import './BarChart-bar.css';

function BarChart-bar(props) {
  return (
    <div 
      className="BarChart-bar"
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default BarChart-bar;
