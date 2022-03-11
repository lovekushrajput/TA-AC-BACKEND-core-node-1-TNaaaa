

// writeCode

// Q. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?
console.log('Welcome to Nodejs')


// Q. In above `index.js` file
// - require os module
let os = require('os')

// - write code to get `number of cpu's, free memory, uptime and version from os module`
console.log(os.cpus().length, os.freemem(),os.uptime(),os.version())

// - write code to require only readFile and unlink method from fs module.
let {readFile,unlink} = require('fs')
console.log(readFile,unlink)

// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.
let method1= Buffer.alloc(12);
let method2= Buffer.allocUnsafe(12)

// - write code to convert buffer back to string.
method1.write('buffer alloc')
method2.write('allocUnsafe')
console.log(method1.toString(),method2.toString())
// Q. Write code example to demonstrate blocking and non-blocking code.
console.log('I am 1st')
console.time('task1')
for(let i  = 0 ; i<10000 ; i++){
}
console.timeEnd('task1')
console.log('I am last')



// Non-blocking codes
console.log('I am first console')
console.time('task2')
setTimeout(()=>{
console.log('I am inside setTimeout')
console.timeEnd('task2')
})
console.log('I am last console')