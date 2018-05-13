/**
 * A common use of the HTTP services in Node.js is to access external systems to
 * get data to fulfill client requests. A variety of external systems provide 
 * data that can be used in various ways. In this example, the code connects to
 * the openweathermap.org API to retrieve weather information about a city. To 
 * keep the example simple, the output from openweathermap.org is pushed to the
 * browser in a raw format. In reality, you would likely massage the pieces of 
 * data needed into your own pages, widgets, or data responses.
 * This file shows the implementation of a web service that accepts both GET 
 * and POST requests. For GET requests, a simple webpage with a form is 
 * returned that allows the user to post a city name. Then in the POST
 * request, the city name is accessed, and the Node.js web client starts up and
 * connects remotely to openweathermap.org to retrieve weather info for that 
 * city. Then that info is returned back to the server, along with the original 
 * web form. The big difference between this example and the previous examples is
 * that the webserver also implements a local web client to connect to the 
 * external service and get data to formulate the response. The webserver is 
 * implemented in lines 35–49. Notice that if the method is POST, we read the 
 * form data from the request stream and use querystring.parse() to get the city
 * name and call into the getWeather() function. The getWeather() function in 
 * lines 26–34 implements the client request to openweathermap.org. Then the 
 * parseWeather() request handler in lines 17–25 reads the response from 
 * openweathermap.org and passes that data to the sendResponse() function defined
 * in lines 4–16, which formulates the response and sends it back to the client. 
 * Figure 7.5 shows the implementation of the external service in a web browser.
 */

var http = require('http');
var url = require('url');
var qstring = require('querystring');

/**
 * The response function forwards a
 * simple webpage to the client
 */
function sendResponse(weatherData, res) {
  var page = '<html><head><title>External Example </title></head>' +
    '<body>' +
    '<form method="post">' +
    'City: <input name="city"><br>' +
    '<input type="submit" value="Get Weather">' +
    '</form>'; 

    if(weatherData) {
      page += '<h1> Weather Info </h1><p>' + weatherData + '</p>';
    }

    page += '</body></html>';
    res.end(page);
}

/**
 * The getWeather function connects to an
 * external web service with parameters
 * provided by the client request
 */
function getWeather(city, res)
{
  var options = {
    host: 'api.openweathermap.org',
    path: '/data/2.5/weather?q=' + city  
  };
  http.request( options, function(weatherResponse) {
    parseWeather(weatherResponse, res);
  }).end();
}

function parseWeather(weatherResponse, res) {
  var weatherData = '';
  weatherResponse.on('data', function (chunk) {
    weatherData += chunk;
  });
  weatherResponse.on('end', function () {
    sendResponse(weatherData, res);
  });
}

http.createServer(function (req, res) {

  console.log(req.method);
  if(req.method == "POST") {
    var reqData = '';

    req.on('data', function(chunk) {
      reqData += chunk;
    });

    req.on('end', function() {
      var postParams = qstring.parse(reqData);
      getWeather(postParams.city, res);
    });
  } else {
    sendResponse(null, res);
  }

}).listen(8080);
