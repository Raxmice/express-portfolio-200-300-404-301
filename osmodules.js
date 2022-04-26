const os = require('os');

var mem = os.uptime()
console.log(mem+' Seconds');
mem = mem/60;
console.log(mem+' Minuts');
mem = mem/60;
console.log(mem+' Hours');
mem = mem/24;
console.log(mem+' Days');
mem = mem/7;
console.log(mem+' Weeks');