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

server.on('listening', function() {
  console.log("Server listening for connections.");
});

server.listen({"port" : 8107}, function() {
  console.log("Server configuration: " + JSON.stringify(server.address()));
});
