import React from 'react';
import './BarChart.css';

function BarChart(props) {
  return (
    <div className="BarChart">
      {
        Object.entries(props.apiData).slice(0,19)
          .map(([key, value]) => (
            <div 
              className="BarChart-bar"
              key={key} 
              style={{height: value.properties.mag*10+"%"}}
              onClick={()=>{alert(value.properties.mag+" | "+ value.properties.place +" | "+ new Date(value.properties.time).toUTCString())}}
            >
              {value.properties.mag.toFixed(1)}
            </div>
        ))
      }
    </div>
  );
}

export default BarChart;
