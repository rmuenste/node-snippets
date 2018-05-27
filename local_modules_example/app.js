/**
 * In this entry file for the Node.js application
 * we import our own local module and use the
 * functions defined in that local module
 */
var myLocalModule = require('./log.js');

myLocalModule.info("Valuable info!");
myLocalModule.warning("This is the last warning!");
myLocalModule.error("You have made a terrible mistake!");
