/**
 * In this file we set up an angular.js controller
 */

// Set up an angular module with the name 'app' and assign
// it to a variable, this way we can create multiple controllers
// in a single module 
var app = angular.module('app', []);

app.controller("FormController", function() {

  this.submitForm = function() {

    // do something useful with the form data here
    console.log("Form submitted");
  };

});
