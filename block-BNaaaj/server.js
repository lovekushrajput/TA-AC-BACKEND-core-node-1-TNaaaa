// #### http protocol

// Q. In server.js
// 1. require parse method from url core node module.
let server= require('url')

// 2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.
let parsedUrl = server.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`)
console.log(parsedUrl)

// 3. console query string from parsed url
console.log(parsedUrl.query)

// 4. console pathname
console.log(parsedUrl.pathname)

// 5. console protocol
console.log(parsedUrl.protocol)

// 6. use parse method from url module to parse query string as well.
console.log(server.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`,true).query)