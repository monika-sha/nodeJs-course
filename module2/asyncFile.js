const fs = require('fs')

console.log('First line')


fs.readFile('file1.txt',callback1)
function callback1(err,data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
}

fs.readFile('file2.txt',callback2)
function callback2(err,data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
}


console.log('Last line')
