import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
// Import components
import BarChart from './components/BarChart/BarChart.js';
import BarChartBar from './components/BarChartBar/BarChartBar.js';
import DataModifier from './components/DataModifier/DataModifier.js';
import MagInput from './components/MagInput/MagInput.js';
import WarningMsg from './components/WarningMsg/WarningMsg.js';


function App() {
  // Establish state variables
  const [apiData, setApiData] = useState([]);
  const [minMag, setMinMag] = useState(5.0);
  const [maxMag, setMaxMag] = useState(8.0);

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

  // Fetch data from API
  function doFetch(){
  console.log("fetching data from API...");

  const api = 
    "https://earthquake.usgs.gov/fdsnws/event/1/\
query?format=geojson&starttime=2020-01-01&\
endtime=" + today + 
"&minmagnitude=" + minMag + 
"&maxmagnitude=" + maxMag + 
"&minlatitude=24.396308&minlongitude=-124.848974\
&maxlatitude=49.384358&maxlongitude=-66.885444";
  
  fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log("this is data", data)
        setApiData(data.features)
    });
  }

  let dataLength=Object.entries(apiData).length

  // Get current date
  let dateObj = new Date();
  
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  
  // Create variable to pass into api
  let today = year + "-" + month + "-" + day;

  useEffect(doFetch,[minMag, maxMag])

  return (
  <div>
    <h1 className="title"> Shake Shack </h1>
    <h2 className="subtitle"> Significant Earthquakes in North America in 2020</h2>
    
    <div className="DataModifier">
      <form>
        <MagInput 
          label="Minimum Magnitude"
          mag={minMag}
          changeMag={minimumMagnitude}
        />
        <MagInput 
          label="Maximum Magnitude"
          mag={maxMag}
          changeMag={maximumMagnitude}
        />
      </form>
      <WarningMsg
        dataLength={Object.entries(apiData).length}
        minMag={minMag}
        maxMag={maxMag}
      />
    </div>
    {/* Bar chart */}
    <BarChart>
    {/* Bars within bar chart go here */}
      {
        Object.entries(apiData).slice(0,19)
          .map(([key, value]) => (
            <BarChartBar
              key={key} 
              style={{height: value.properties.mag*10+"%"}}
              onClick={() => {
                alert(value.properties.mag + 
                " | " + value.properties.place +
                " | " + new Date(value.properties.time).toUTCString())
                }
              }
            >
              {value.properties.mag.toFixed(1)}
            </BarChartBar>
        ))
      }     
    </BarChart>
  </div>
  );
}

export default App;
