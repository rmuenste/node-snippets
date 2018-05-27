/**
 * In Node.js local modules encapsulate different functionalities
 * in separate files and folders. These modules can also be reused
 * in other Node.js application. Later these local modules can
 * be redistributed as NPM packages and shared with the Node.js
 * community.
 */


// In Node.js modules should be in separate files
var log = {

  info : function (info) {
    console.log("Info called with the following info: " + info); 
  },
  warning : function (warn) {
    console.log("Warning called with the following warning: " + warn); 
  },
  error : function (err) {
    console.log("Error called with the following error: " + err); 
  }

};

/**
 * The module.exports is a special object that in by default included in every .js
 * file in the Node.js application by default. It is used to expose a function
 * or an object or a variable as a module in Node.js
 */
module.exports = log;
