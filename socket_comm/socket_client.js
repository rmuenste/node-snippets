var net = require('net');

/**
 * The function establishes a socket connection with a user-defined
 * name to the computer 'localhost'.
 * @parameter connName: a string for the connection name
 */
function getConnection(connName, msg) {
  var client = net.connect({host : 'localhost', port : 8107}, function() {
    console.log(connName + " connected: ");
    console.log("    local: %s:%s", this.localAddress, this.localPort);
    console.log("    remote: %s:%s", this.remoteAddress, this.remotePort);

    // Set the timeout and encoding
    this.setEncoding('utf8');
    this.setTimeout(500);

    // define event handlers
    this.on('data', function(data) {
      console.log(connName + " from Server: " + data.toString());
      this.end();
    });
    this.on('end', function() {
      console.log(connName + " Client disconnected");
    });
    this.on('error', function(err) {
      console.log(connName + " Socket error: " + JSON.stringify(err));
    });
    this.on('timeout', function() {
      console.log(connName + " Socket timeout.");
    });
    this.on('close', function() {
      console.log(connName + " Socket closed.");
    });
  });
  writeData(client, msg);
} 

/**
 * A function to write data into the socket
 */
function writeData(socket, data) {
  var success = !socket.write(data);

  if(!success) {
    (function(socket, data) {
      socket.once('drain', function () {
        writeData(socket, data);
      });
    })(socket, data);
  }
}

Dwarves = getConnection('Dwarves', "More Axes");
Elves = getConnection('Elves', "More Arrows");
Hobbits = getConnection('Hobbits', "More Pipe Weed");

//writeData(Dwarves, "More Axes");
//writeData(Elves, "More Arrows");
//writeData(Hobbits, "More Pipe Weed");



