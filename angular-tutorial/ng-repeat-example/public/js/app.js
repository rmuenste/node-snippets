/**
 * In this file we set up an angular.js controller
 */

// Set up an angular module with the name 'app' and add a
// controller called 'MainController'
angular.module('app', []).controller("MainController", function() {

  // an array of tasks
  this.tasks = [
    {
      name: "Go to grocery",
      done: false
    },
    {
      name: "Walk the dog",
      done: false
    },
    {
      name: "Dinner with boss",
      done: false
    }
  ];

});
