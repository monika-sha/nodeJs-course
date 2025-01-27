// execute file serial wise like 1,2,3
const fs = require('fs')


console.log('start')

fs.readFile('file1.txt',cb1)
function cb1(err,data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
    fs.readFile('file2.txt',cb2) 
}


function cb2(err,data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
    fs.readFile('file3.txt',cb3)
}


function cb3(err,data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
}

console.log('end')

