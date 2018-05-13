
var net = require('net');

/**
 * @parameter client: the socket object
 */
var server = net.createServer(function (client) {
  console.log('Client connected');
  client.on('data', function(data) {
    console.log('Client sent: ' + data.toString());
  });
  client.on('end', function() {
    console.log('Client disconnected');
  });
  client.write('Hello');
});
