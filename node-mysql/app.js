var express = require('express');
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ticCerk9",
  database: "northwind"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// This statement selects all columns from the customers 
// table from the table customers
con.query('SELECT * FROM customers', function (err, result) {
  if (err) throw error;
  console.log('The solution is: ', result);
});

// This statement selects the 'City' column from the
// table customers 
con.query('SELECT City FROM customers', function (err, result) {
  if (err) throw error;
  console.log('The solution is: ', result);
});

// This SQL statement lists the number of distinct customer cities
con.query('SELECT COUNT(DISTINCT City) FROM customers;', function (err, result) {
  if (err) throw err;
  console.log('The solution is: ', result);
  console.log(JSON.stringify(result));
  console.log(result[0]['COUNT(DISTINCT City)']);
});
//
// This statement selects the all the customers 
// who live in the city Portland 
con.query('SELECT * FROM customers WHERE City="Portland";', function (err, result) {
  if (err) throw error;
  console.log('The solution is: ', result);
});


// Add a route for '/'
app.get('/', function(req,res) {
  res.send("Running on port 3000");
});

// Listen on port 3000
app.listen('3000');
