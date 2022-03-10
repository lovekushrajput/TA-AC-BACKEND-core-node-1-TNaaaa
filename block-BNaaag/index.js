// 1. require fs in a file(`index.js`) and use fs.readFile to read content of a file(content.md)

let fs = require('fs')
let fs1 = fs.readFile('content.md',(err,data)=> {
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
console.log(fs1);






 let sync = fs.readFileSync('content.md','utf8')
 console.log(sync)


let buff1 = Buffer.alloc(10)
buff1.write('Welcome to Bufferr')
console.log(buff1.toString())