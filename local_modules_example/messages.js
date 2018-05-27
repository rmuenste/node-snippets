
// In this module we export a simple string literal
/* module.exports is a JS object, so we can attach properties and functions to
 * it. If we use the syntax <module.exports.simpleMessage = "Simple Message"> then
 * an object { SimpleMessage : 'Simple Message'} will be created.
 */
module.exports.simpleMessage = "Simple Message";
module.exports.complexMessage = "Very complex Message";
