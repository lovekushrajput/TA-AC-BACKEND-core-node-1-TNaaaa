// 1. create a basic node server using http module's createServer method and add a listener on port 4000.
let http = require('http')
function handleServer(req,res){
console.log(req,res)
res.end('Welcome')
}
let server = http.createServer(handleServer)
server.listen(3000,'localhost',()=>{
    console.log('Server is responding')
})

// 2. start the server using script writer i.e. `node script_file.js`
// 2. open the browser and request your server on url `http://localhost:4000`.
// 3. notice the output in browser and terminal.