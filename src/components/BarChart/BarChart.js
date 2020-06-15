import React from 'react';
import './BarChart.css';

function BarChart(props) {
  return (
    <div className="BarChart">
      {
        Object.entries(props.apiData).slice(props.page*20-20, props.page*20-1)
          .map(([key, value]) => (
            <div 
              className="BarChart-bar"
              key={key} 
              style={{height: value.properties.mag*10+"%"}}
              onClick={()=>{alert(value.properties.mag+" | "+ value.properties.place +" | "+ new Date(value.properties.time).toUTCString())}}
            >
              {value.properties.mag.toFixed(1)}
              <div className="tooltiptext">
                <p>{value.properties.mag.toFixed(1)}</p>
                <p>{value.properties.place}</p>
                <p>{new Date(value.properties.time).toUTCString()}</p>
              </div>
            </div>
        ))
      }
    </div>
  );
}

export default BarChart;
