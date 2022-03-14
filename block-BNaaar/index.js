let http = require('http')
let url = require('url')

// Create a basic http server which is listening on port 5k 
let server =  http.createServer(handleServer)
function handleServer(req,res){
   let parsedUrl = url.parse(req.url)
  let pathName = parsedUrl.pathname
if(req.method==='GET' && pathName==='/'){
    res.setHeader('Content-Type','text/plain')
    res.write('Welcome to homepage')
    res.end()
}else if(req.method==='GET' && pathName==='/about'){
    res.setHeader('Content-Type','text/html')
    res.write('<h2>This is all about NodeJS </h2>')
    res.end()
} else if(req.method==='POST' && pathName==='/about'){
    res.write(`${JSON.parse(`{"message":"this is a post request"}`)}`)
    res.end()
}else{
    res.statusCode = 404
    res.end('Page not found')
}
}

server.listen(5000,()=>console.log('server is listening on port 5000'))
// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
// 2. handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.
// 3. handle POST request on '/about' and send json response `{message: this is a post request}`.

