import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts.css';

function App() {

  const [apiData, setApiData] = useState([]);
  const [minMag, setMinMag] = useState(5);
  const [maxMag, setMaxMag] = useState(8);

  function minimumMagnitude(ev) {
    let value = ev.target.value;
    console.log('Minimum magnitude:', value);
    setMinMag(value);
  }

  function maximumMagnitude(ev) {
    let value = ev.target.value;
    console.log('Maximum magnitude:', value);
    setMaxMag(value);
  }
  

  function doFetch(){
  console.log("fetching data from API...");

  const api = "https://earthquake.usgs.gov/fdsnws/event/1/query? format=geojson&starttime=2020-01-01&endtime=2020-05-26&minmagnitude="+minMag+"&maxmagnitude="+maxMag+"&minlatitude=24.396308&minlongitude=-124.848974&maxlatitude=49.384358&maxlongitude=-66.885444";
  
  fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log("this is data", data)
        setApiData(data.features)
    });
  }

  useEffect(doFetch,[minMag, maxMag])

  return (
  <div>
    <h1 className="title"> Shake Shack </h1>
    <h2 className="subtitle"> Significant Earthquakes in North America in 2020</h2>
    <div className="DataModifier">
      <form>
        <label htmlFor="minmag"> Minimum Magnitude:</label>
          <input 
            className="MagInput" 
            type="number" 
            id="minmag" 
            min="1" 
            max="10" 
            value={minMag} 
            onChange={minimumMagnitude} 
          />
        <label htmlFor="maxmag">Maximum Magnitude:</label>
          <input 
            className="MagInput" 
            type="number" 
            id="maxmag" 
            min="1" 
            max="10" 
            value={maxMag} 
            onChange={maximumMagnitude} 
          />
      </form>
    </div>
    <div id="warning">
    </div>
    {/* Bar chart */}
    <div className="BarChart">
    {/* Bars within bar chart go here */}
      {
        Object.entries(apiData).map(([key, value]) => (
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
  </div>
  );
}

export default App;
