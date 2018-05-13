var dns = require('dns');

console.log("Resolving www.google.com . . .");
dns.resolve4("www.google.com", function(err, addresses) {
  console.log("IP4 Addresses:" + JSON.stringify(addresses, false, ' '));
  addresses.forEach(function (addr) {
    dns.reverse(addr, function(err, domain) {
      console.log("Reverse for address " + addr + " : " + JSON.stringify(domain) );
    });
  });
});
