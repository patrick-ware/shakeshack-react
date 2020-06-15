import React, { useState, useEffect } from 'react';
import './App.css';
// Import components
import BarChart from './components/BarChart/BarChart.js';
import MagInput from './components/MagInput/MagInput.js';
import WarningMsg from './components/WarningMsg/WarningMsg.js';


function App() {
  const [apiData, setApiData] = useState([]);
  const [minMag, setMinMag] = useState(5.0);
  const [maxMag, setMaxMag] = useState(8.0);
  const [page, setPage] = useState(1);

  // Modify minimum magnitude
  function minimumMagnitude(ev) {
    let value = ev.target.value;
    console.log('Minimum magnitude:', value);
    setMinMag(value);
  }

  // Modify maximum magnitude
  function maximumMagnitude(ev) {
    let value = ev.target.value;
    console.log('Maximum magnitude:', value);
    setMaxMag(value);
  }
  // Go to next page
  function goToNextPage() {
    const newPageValue = Math.min(page + 1, apiData.length)
    setPage(newPageValue)
  }
  // Go to previous page
  function goToPreviousPage() {
    const newPageValue = Math.max(page - 1, 1)
    setPage(newPageValue)
  }

  // Get todays date to pass into api
  function currentDate(){
    let dateObj = new Date();
    
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    
    let today = year + "-" + month + "-" + day;
    console.log("today is", today)
    return today
  }

  // Fetch data from API
  function doFetch(){
  console.log("fetching data from API...");

    const api = 
      "https://earthquake.usgs.gov/fdsnws/event/1/"+
      "query?format=geojson&starttime=2020-01-01&"+
      "endtime=" + currentDate() + 
      "&minmagnitude=" + minMag + 
      "&maxmagnitude=" + maxMag + 
      "&minlatitude=24.396308"+
      "&minlongitude=-124.848974"+
      "&maxlatitude=49.384358"+
      "&maxlongitude=-66.885444";
    
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
    <h1 className="title"> 
      Shake Shack 
    </h1>
    <h2 className="subtitle"> 
      Significant Earthquakes in North America in 2020
    </h2>    
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
    <BarChart 
      apiData={apiData}
      page={page}
    />
    current page: {page}
    <button onClick={goToPreviousPage}>prev page</button>
    <button onClick={goToNextPage}>next page</button>
  </div>
  );
}

export default App;
