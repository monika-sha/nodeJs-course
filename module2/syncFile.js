///// reding a file syncronsly

const fs = require('fs')

console.log('first line')

const readfileSynchronous = fs.readFileSync('text.txt') 
console.log(readfileSynchronous.toString());

console.log('last line')
