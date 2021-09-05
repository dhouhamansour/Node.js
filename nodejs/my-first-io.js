const fs = require('fs') ;


var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString().split('\n').length);

console.log("Program Ended");