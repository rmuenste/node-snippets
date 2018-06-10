var jd = require('./juliandate.js');
var util = require('util');
var mysql = require('mysql');


var twoJune = new Date(Date.UTC(2018, 5, 2));
console.log(twoJune.toLocaleDateString('de-DE'));
var twoJuneJD = jd.julianDate(twoJune.getUTCDate(),
                              twoJune.getUTCMonth()+1,
                              twoJune.getUTCFullYear());
console.log("2nd of June: " + twoJuneJD);

// entry:
// _id, jd(int), file VARCHAR(255), day int, month int, y int, success int

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ticCerk9",
  database: "praxis"
});
//
// This SQL statement lists the number of distinct customer cities
//con.query('SELECT COUNT(DISTINCT juliandate) FROM Backups;', function (err, result) {
//  if (err) throw err;
//  console.log('The solution is: ', result);
//  console.log(JSON.stringify(result));
//  console.log(result[0]['COUNT(DISTINCT juliandate)']);
//});


console.log("========================================");
console.log("Computing dates: ");
for(var i=1; i <= 10; i++) {
  var myDate = new Date(Date.UTC(2018, 5, i)); 
  //console.log(myDate.toLocaleDateString('de-DE'));

  var day = myDate.getUTCDate();
  var month = myDate.getUTCMonth()+1;
  var year = myDate.getUTCFullYear();

  var myDateJD = jd.julianDate(myDate.getUTCDate(),
                               myDate.getUTCMonth()+1,
                               myDate.getUTCFullYear());
//  console.log("JulianDate: " + myDateJD);
  var myPath = "albis-" + myDate.getUTCDate() + "-"
                        + month + "-"
                        + myDate.getUTCFullYear() + ".log";
//  console.log("Path: " + myPath);

  // select the last 2 charcters
  var pday = ("00" + day).slice(-2);
  var pmonth = ("00" + month).slice(-2);
//  console.log(util.format('albis-%s-%s-%d.log',pday,pmonth,year));
  var record = {
    juliandate : myDateJD, 
    TDay : day, 
    TMonth : month, 
    TYear : year, 
    success : '1',
    file : myPath
  };
  // Insert new record into db
  con.query('INSERT INTO Backups SET ?', record, function (err, result) {
    if (err) throw err;
    else
    {
      console.log("Entry inserted successfully");
      //console.log("Last record insert id: " + result.insertId);
    }
  });
  console.log(record);
}

con.end();
