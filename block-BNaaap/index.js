// 1. create a server on port 4444 and request from browser on `localhost:4444`
let http  = require('http')
let server = http.createServer(handleSever)
function handleSever(req,res){
    res.statusCode = 201,
    res.setHeader('content-Type','text/html')
    res.end(`<h1> Welcome </h1>`)
}

server.listen(4444,()=>console.log('server is responding on port 4444'))
// 2. Add statusCode of 201 and headers to send html content to response
// 3. Do request on server using **different HTTP methods** using **Postman** and write code to check request methods for multiple requests.

