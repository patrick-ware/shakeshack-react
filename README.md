![shake-shack-js](./shake-shack.png)
# shake-shack-components

A React-enabled visualization of 2020 earthquake data in North America from [USGS Earthquake Catalog API](https://earthquake.usgs.gov/fdsnws/event/1/). Uses [react-date-picker](https://www.npmjs.com/package/react-date-picker).

## Parameters
The user can modify the `minmagnitude`, `maxmagnitude`, `starttime`, and `endtime` parameters by using the inputs.

The following other parameters were used to retrieve the displayed data:

`starttime`: 2020-01-01

`minlatitude`: 24.396308

`minlongitude`: -124.848974

`maxlatitude`: 49.384358

`maxlongitude`: -66.885444

The current date is retrieved from the browser and submitted as the `endtime` parameter.

[Check it out live](https://react-component-graph.herokuapp.com/)
