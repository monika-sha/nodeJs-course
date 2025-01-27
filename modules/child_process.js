const cp = require('child_process'); // call child process

// cp.execSync('calc');
// cp.execSync('start chrome');
// cp.execSync('start chrome https://hts.golfrealty.in/');

console.log('output ' +cp.execSync('node child_process_other.js'))  
