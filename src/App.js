import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts.css';

function App() {

  const [apiData, setApiData] = useState([
    {mag:'5', place:'', time:''},
    {mag:'6', place:'', time:''},
    {mag:'7', place:'', time:''},
    {mag:'8', place:'', time:''},
  ]);

  function doFetch(){
  console.log("fetching data from API...")

  const api = "https://earthquake.usgs.gov/fdsnws/event/1/query? format=geojson&starttime=2020-01-01&endtime=2020-05-26&minmagnitude=5&minlatitude=24.396308&minlongitude=-124.848974&maxlatitude=49.384358&maxlongitude=-66.885444";

  fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log("this is data", data)
//      setApiData({
//        mag: data.features.properties.mag,
//        place: data.features.properties.place,
//        time: new Date(data.features.properties.time).toUTCString(),
//       });
    });
  }


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
      <button className="StdButton" onClick={doFetch}> Graph it! </button>
    </div>
    <div id="warning">
    </div>
    {/* Bar chart */}
    <div className="BarChart">
    {/* Bars within bar chart go here */}
      {
        apiData.map(quake => (
          <div className="BarChart-bar" stlye={{height: quake.mag*10 +"%"}}>
          5
          </div>
        ))
      }     
    </div>
  </div>
  );
}

//onClick={() =>alert("hi")}
export default App;
