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

  useEffect(doFetch,[])

  return (
  <div>
    <h1 className="title"> Shake Shack </h1>
    <h2 className="subtitle"> Significant Earthquakes in North America in 2020</h2>
    <div className="DataModifier">
      <form className="FormClass" action="">
        <label htmlFor="magnitude">Magnitude:</label>
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
      <form>
        <label htmlFor="minmag">Minimum Magnitude:</label>
          <input type="text" id="minmag" value={minMag} onChange={minimumMagnitude} />
        <label htmlFor="maxmag">Maximum Magnitude:</label>
          <input type="text" id="maxmag" value={maxMag} onChange={maximumMagnitude} />
      </form>
      <button className="StdButton" onClick={doFetch}> Graph it! </button>
    </div>
    <div id="warning">
    </div>
    {/* Bar chart */}
    <div className="BarChart">
    {/* Bars within bar chart go here */}
      {
        Object.entries(apiData).map(([key, value]) => (
          <div className="BarChart-bar" key={key} style={{height: value.properties.mag*10+"%"}}>
            {value.properties.mag.toFixed(1)}
          </div>
        ))
      }     
    </div>
  </div>
  );
}

//onClick={() =>alert("hi")}
export default App;
