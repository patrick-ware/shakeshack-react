import React from 'react';
import './MagInput.css';

function MagInput(props) {
  return (
    <div>
      <label htmlFor="minmag"> {props.label}:</label>
        <input 
          className="MagInput" 
          type="number" 
          id="minmag" 
          min="1.0" 
          max="10.0"
          step="0.1"
  //        value={props.minMag} 
  //        onChange={props.minimumMagnitude} 
        />
    </div>
  )
}
export default MagInput;
