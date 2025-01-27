
let fs = require('fs')
//////////////////////// files
// read file data

const readFile = fs.readFileSync('fs_file1.txt')
console.log('read data from file '+ readFile)

//write data in file

fs.writeFileSync('fs_file2.txt',' write file 2 data ')  // erase old data and add new one
console.log('File has been written')

// append data in file

fs.appendFileSync('fs_file2.txt','File2 appended data')
console.log('file appended data')

//delete a file 
fs.unlinkSync('fs_file3.txt')
console.log('File has been deleted')

/////////////////////// directory 

// create directory
// fs.mkdirSync('myDirectory')


//check directory exists
let dirExists = fs.existsSync('myDirectory') 
console.log(dirExists)

// check file exists
let fileExists = fs.existsSync('fs_file1.txt')
console.log(fileExists)

//get content / files of directory
let dirContent = fs.readdirSync('myDirectory')
console.log('Folder content ' + dirContent)

//delete directory
 fs.rmdirSync('newDir')
console.log('directory removed')

