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

  this.add = function(newtask) {
    console.log("adding task: " + newtask.name);
    var task = {};
    task.name = newtask.name;
    task.done = false;

    // The push function adds an element to the end of
    // the array tasks 
    this.tasks.push(task);
    newtask.name = "";
  };

  this.delete = function(task) {
    console.log("deleting task: " + task.name);
    for (var i = 0; i < this.tasks.length; i++) {

      if(this.tasks[i].name === task.name) {
        // The splice function removes 1 element from the array
        // at position i.
        // The splice function can also add elements to the array
        // at a certain position.
        // array.splice(index, howmany, item1, ....., itemX)
        this.tasks.splice(i,1);
        break;
      }
    }
  };

});
