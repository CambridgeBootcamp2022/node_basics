const fs = require('fs');
const os = require('os');
const path = require('path');

// will return false, no directory
const isDirectory = fs.statSync('./hello').isDirectory();

// console.log(isDirectory);

// fs.readdir('./hello', (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// // array of information about each cpu core
// console.log(os.cpus());

// // total memory, free memory, in Gigabyte:
// console.log(os.totalmem() / 1024 / 1024 / 1024);

// console.log(os.freemem() / 1024 / 1024 / 1024);

// // uptime in hours:
// console.log(os.uptime() / 60 / 60);

const filename = path.basename('./index.js');
console.log(filename);

// console.log('Hello World')
