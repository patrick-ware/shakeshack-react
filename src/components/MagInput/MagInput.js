import React from 'react';
import './MagInput.css';

function MagInput(props) {
  return (
    <div style={{display: "inline-block"}}>
      <label htmlFor="minmag"> {props.label}:</label>
        <input 
          className="MagInput" 
          type="number" 
          id="minmag" 
          min="1.0" 
          max="10.0"
          step="0.1"
        value={props.mag} 
        onChange={props.changeMag} 
        />
    </div>
  )
}
export default MagInput;
