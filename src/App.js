import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <h1 className="title"> Shake Shack </h1>
    <h2 className="subtitle"> Significant Earthquakes in North America in 2020</h2>
    <div className="DataModifier">
      <form className="FormClass" action="">
        <label for="magnitude">Magnitude:</label>
          <select className="Menu" id="magnitude" name="magnitude">
          <option className="Menu-item" value="1.0">1.0</option>
          <option className="Menu-item" value="1.5">1.5</option>
          <option className="Menu-item" value="2.0">2.0</option>
          <option className="Menu-item" value="2.5">2.5</option>
          <option className="Menu-item" value="3.0">3.0</option>
          <option className="Menu-item" value="3.5">3.5</option>
          <option className="Menu-item" value="4.0">4.0</option>
          <option className="Menu-item" value="4.5">4.5</option>
          <option className="Menu-item" value="5.0">5.0</option>
          <option className="Menu-item" value="5.5">5.5</option>
          <option className="Menu-item" value="6.0">6.0</option>
          <option className="Menu-item" value="6.5">6.5</option>
          <option className="Menu-item" value="7.0">7.0</option>
          <option className="Menu-item" value="7.5">7.5</option>
          <option className="Menu-item" value="8.0">8.0</option>
          <option className="Menu-item" value="8.5">8.5</option>
          <option className="Menu-item" value="9.0">9.0</option>
          <option className="Menu-item" value="9.5">9.5</option>
          <option className="Menu-item" value="10.0">10.0</option>
        </select>
      </form>
      <button className="StdButton" onClick={() =>alert("hi")}> Graph it! </button>
    </div>
    <div id="warning">
    </div>
    {/* Bar chart */}
    <div className="BarChart">
    {/* Bars within bar chart go here */}
    </div>
  </div>
  );
}

export default App;
