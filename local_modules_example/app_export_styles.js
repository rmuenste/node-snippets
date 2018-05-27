/**
 * In this entry file for the Node.js application
 * we import our own local modules and show different possibilites
 * how functions, variables and objects can be encapsulated in
 * local modules.
 **/

// This module contains only a couple of string variables
var msg = require("./messages.js");

// This module contains only a single anonymous function
var print = require("./Print.js");

// This module contains only a JSON object with some data
var data = require("./data.js");

// This module contains only a JSON object with some data
var person = require("./Person.js");

// Print out the variable contained in the module
console.log(msg.simpleMessage);
console.log(msg.complexMessage);

// Use the anonymous function from the print module
print("Old school print.");

// Take a look at the data object 
print(data);
print("My name is " + data.lastName + ", " + data.firstName + " " + data.lastName);

var person1 = new person("James", "Bond");
print(person1.introduction());
