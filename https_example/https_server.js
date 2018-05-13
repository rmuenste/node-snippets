var https = require('https');
var fs = require('fs');

var options = {
  key : fs.readFileSync('/home/rafa/https_server/server.pem'),
  cert : fs.readFileSync('/home/rafa/https_server/server.crt')
};

https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('Hello Secure World!\n');
}).listen(8080);
