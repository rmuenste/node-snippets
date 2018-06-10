
var JulianDate = function(id, im, iy) {


  var dy = iy + (im - 2.85) /12;

  var da = Math.floor(367 * dy) - 1.75 * Math.floor(dy) + id;

  var db = Math.floor(da) - 0.75 * Math.floor(dy/100);

  return Math.floor(Math.floor(db) + 1721115);
  
}

var checkJulianDate = function(ref, sol) {
  if(ref === sol) {
    console.log("Date " + sol + " was computed correctly");
  } else {
    console.log("Date was computed incorrectly");
    throw err;
  }
}

var options = {weekday: 'long', year: 'numeric', month:'long', day:'numeric'};

// Get the current date
var myDate = new Date();
console.log(myDate.toLocaleDateString('de-DE', options));
// This returns the current day of the week starting
// with Sunday = 0
console.log(myDate.getUTCDay());
// This returns the day of the month contained
// in the date object
console.log("Day of the month: " + myDate.getUTCDate());
// This function return the month counting from January = 0
var month = myDate.getUTCMonth() + 1;
console.log("Month of the year: " + month);
// This function return the month counting from January = 0
console.log("Year: " + myDate.getUTCFullYear());

var d = myDate.getUTCDate();
var m = myDate.getUTCMonth() + 1;
var y = myDate.getUTCFullYear();
console.log("JulianDate: " + JulianDate(d, m, y));
var twoJune = new Date(Date.UTC(2018, 5, 2));
console.log(twoJune.toLocaleDateString('de-DE', options));
var twoJuneJD = JulianDate(twoJune.getUTCDate(),
                           twoJune.getUTCMonth()+1,
                           twoJune.getUTCFullYear());
checkJulianDate(2458272, twoJuneJD);
var y2k = new Date(Date.UTC(2000, 0, 1));
console.log(y2k.toLocaleDateString('de-DE', options));
var y2kJD = JulianDate(y2k.getUTCDate(),
                           y2k.getUTCMonth()+1,
                           y2k.getUTCFullYear());
checkJulianDate(2451545, y2kJD);
