
var net = require('net');

/**
 * @parameter client: the socket object
 */
var server = net.createServer(function (client) {
  console.log('Client connection: ');
  console.log("    local: %s:%s", client.localAddress, client.localPort);
  console.log("    remote: %s:%s", client.remoteAddress, client.remotePort);

  client.setTimeout(500);
  client.setEncoding('utf8');

  client.on('data', function(data) {
    console.log('Client sent: ' + data.toString());
  });
  client.on('end', function() {
    console.log('Client disconnected');
    server.getConnections( function(err, count) {
      console.log("Remaining connections: " + count);
    });
  });
  client.on('error', function(err) {
    console.log('Socket error: ' + JSON.stringify(err));
  });
  client.write('Hello');
});


server.on('listening', function() {
  console.log("Server listening for connections.");
});

server.listen({"port" : 8107}, function() {
  console.log("Server configuration: " + JSON.stringify(server.address()));
  server.on('error', function(err) {
    console.log('Server Error: ' + JSON.stringify(err));
  });
  server.on('end', function() {
    console.log('Server Terminated.');
  });
});
