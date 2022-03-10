// 1. require fs in a file(`index.js`) and use fs.readFile to read content of a file(content.md)

let fs = require('fs')
let fs1 = fs.readFile('content.md',(err,data)=> {
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
console.log(fs1)

// Run sync code from fs module in the above file(`index.js`).
// console.log('I am 1st')
// console.time('task1')
// function sayHello(name){
//     console.log(`Hello ${name}`)
// }
// sayHello('Lovekush')
// console.timeEnd('task1')
// console.log('I am last')


// Run async code from fs module in same file.
// console.log('I am first console')
// console.time('task1')
// setTimeout(()=>{
// console.log('I am inside setTimeout')
// console.timeEnd('task1')
// })
// console.log('I am last console')


let buff1 = Buffer.alloc(10)
buff1.write('Welcome to Bufferr')
console.log(buff1.toString())