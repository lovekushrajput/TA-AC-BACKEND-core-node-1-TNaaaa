// 1. create a basic server and listen on port 3000
let http = require('http')
// 2. write code to console
//   - request headers
//   - request method and url
// 3. request from browser on `http://localhost:3000/about`
let server = http.createServer(handleServer)
function handleServer(req,res){
    console.log(req.headers,req.method)
res.end('Welcome')
}

server.listen(3000,()=>{
    console.log('server is listening on port 3000')
})