import React from 'react';
import './DataModifier.css';

function DataModifier(props) {
  return (
    <div className="DataModifier">
      <form>
        <label htmlFor="minmag"> Minimum Magnitude:</label>
          <input 
            className="MagInput" 
            type="number" 
            id="minmag" 
            min="1.0" 
            max="10.0"
            step="0.1"
            value={props.minMag} 
            onChange={props.minimumMagnitude} 
          />
        <label htmlFor="maxmag">Maximum Magnitude:</label>
          <input 
            className="MagInput" 
            type="number" 
            id="maxmag" 
            min="1.0" 
            max="10.0"
            step="0.1" 
            value={props.maxMag} 
            onChange={props.maximumMagnitude} 
          />
      </form>
      {props.children}
    </div>
  )
}
export default DataModifier;
