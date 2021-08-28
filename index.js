const { nextISSTimesForMyLocation, printPassTimes } = require("./iss");

// const ipAdd = "99.227.133.146"
// const coord = {latitude: '43.7952', longitude: '-79.267'}

// const callback = (error, ip) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(ip);
// };
// fetchMyIP(callback);


// fetchCoordsByIP(ipAdd, (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates);
// });


// fetchISSFlyOverTimes(coord, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

// const { nextISSTimesForMyLocation } = require('./iss');

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});