const path  = require('path')

const ext = path.extname('C:\\xampp\\htdocs\\NodeJS\\modules\\path_file.txt') // path of the file
const basename = path.basename('C:\\xampp\\htdocs\\NodeJS\\modules\\path_file.txt') // path of the file

console.log(ext)
console.log(basename)
console.log(__filename)  // particular file path working current file with
console.log(__dirname)  // particular file path working current  directory with
 
