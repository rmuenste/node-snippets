// In this module we create a function that
// generates an object.
module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.introduction = function() {

    return "My name is " + this.lastName + ", " + this.firstName + " " + this.lastName;

  }
};
