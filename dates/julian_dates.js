/**
 * This is an implementation of a converter from
 * a Gregorian date to a Julian date.
 * The conversion is done using the following algorithm:
 *  y  = Jahr + (Monat − 2,85) / 12
 *  A  = Int(367 * y) − 1,75 * Int(y) + Tag
 *  B  = Int(A) − 0,75 * Int(y / 100)
 *  JD = Int(B) + 1721115
 */ 

function getJulianDate(day, month, year) {

  console.log("Day: " + day);
  console.log("Month: " + month);
  console.log("Year: " + year);

  var y = year + (month - 2.85) / 12.0;
  var A = parseInt(367 * y) - 1.75 * parseInt(y) + day;
  var B = parseInt(A) - 0.75 * parseInt(y/100.0);
  var JD = parseInt(B) + 1721115

//  console.log("Y: " + y);
//  console.log("A: " + A);
//  console.log("B: " + B);
//  console.log("JD: " + JD);

  return JD;

}

var today = new Date();
console.log("Today in julian calendar: " + getJulianDate(today.getUTCDate(), today.getUTCMonth() + 1, today.getUTCFullYear()));
console.log(getJulianDate(11,5,2018)); //2458250
console.log(getJulianDate(1,1,2000)); //2451545
