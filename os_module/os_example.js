var os = require('os');

console.log("Tmpdir :\t" + os.tmpdir());
console.log("endianness :\t" + os.endianness());
console.log("type :\t\t" + os.type());
console.log("platform :\t" + os.platform());
console.log("arch :\t\t" + os.arch());
console.log("release :\t" + os.release());
console.log("uptime :\t" + os.uptime());
console.log("loadavg :\t" + os.loadavg());
console.log("totalmem :\t" + os.totalmem());
console.log("freemem :\t" + os.freemem());
console.log("EOL :\t" + os.EOL);
console.log("cpus :\t\t" + JSON.stringify(os.cpus()));
console.log("network Interfaces :" + JSON.stringify(os.networkInterfaces()));


