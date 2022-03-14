let http = require('http')
let url = require('url')

// Q.1
let server = http.createServer(handleServer)
function handleServer(req,res){
    console.log(req,res)
}
server.listen(5000,()=> console.log('server is listening on port 5000'))

// Q.2
let nodeServer = http.createServer(handleNodeServer)
function handleNodeServer(req,res){
    res.end('My first server in NodeJS')
}
nodeServer.listen(5100,()=> console.log('server is listening on port 5100'))

// Q.3
let nodeServer2 = http.createServer(handleNodeServer2)
function handleNodeServer2(req,res){
    console.log(req.headers)
    let userAgent = req.headers['user-agent']
res.end(`${userAgent}`)
}
nodeServer2.listen(5555,()=> console.log('server is listening on port 5555'))

// Q.4
let nodeServer3 = http.createServer(handleNodeServer3)
function handleNodeServer3(req,res){
    console.log(req.url, req.method)
let requestUrl = JSON.stringify(req.url)
let requestmethod = JSON.stringify(req.method)
res.write(`${requestUrl}`)
res.write(`${requestmethod}`)
res.end()
}
nodeServer3.listen(5566,()=> console.log('server is listening on port 5566'))

// Q.5
let nodeServer4 = http.createServer(handleNodeServer4)
function handleNodeServer4(req,res){
    res.write(`${JSON.stringify(req.headers)}`)
res.end()
}
nodeServer4.listen(7000,()=> console.log('server is listening on port 7000'))

// Q.6
let server2 = http.createServer(handleServer2)
function handleServer2(req,res){
    res.write(`${JSON.stringify(res.statusCode = 202)}`)
res.end()
}
server2.listen(3333)

// Q.7
let server3 = http.createServer(handleServer3)
function handleServer3(req,res){
    res.setHeader('Content-Type','text/html')
    res.write(`<h3>Welcome to altcampus</h3>`)
res.end()
}
server3.listen(8000,()=> console.log('server is listening on port 8000'))

// Q.7 Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.
let server4 = http.createServer(handleServer3)
function handleServer3(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<h3>Welcome to altcampus</h3>`)
res.end()
}
server4.listen(8001,()=> console.log('server is listening on port 8001'))


// Q.8 
let nodeServer5 = http.createServer(handleNodeServer)
function handleNodeServer(req,res){
    res.setHeader('Content-Type','application/json')
    res.write(`{success: true, message: 'Welcome to Nodejs'}`)
res.end()
}
nodeServer5.listen(8888,()=> console.log('server is listening on port 8888'))

// Q.9
let server5 = http.createServer(handleServer3)
function handleServer3(req,res){
    console.log(req.method)
    res.setHeader('Content-Type','text/html')
    res.write(`<h2>posted for first time</h2>`)
res.end()
}
server5.listen(5050,()=> console.log('server is listening on port 5050'))

// Q.10
let server6 = http.createServer(handleServer4)
function handleServer4(req,res){

    if(req.method==='GET' && req.url==='/'){
        res.setHeader('Content-Type','text/plain')
        res.write(`lovekush`)
    res.end()
    }else if(req.method==='GET' && req.url==='/about'){
        res.setHeader('Content-Type','text/html')
        res.write(`<h2>lovekush</h2>`)
    res.end()
    }else{
        res.end(`Page not found ${res.statusCode=404}`)
    }
}
server6.listen(2345,()=> console.log('server is listening on port 2345'))

// Q.11
let server7 = http.createServer(handleServer5)
function handleServer5(req,res){

    if(req.method==='GET' && req.url==='/users'){
        res.setHeader('Content-Type','text/html')
        res.write(`  <form action="">
        <input type="text" name="email" placeholder="Your email" required>
    </form>`)
    res.end()
    }else if(req.method==='POST' && req.url==='/users'){
        res.write('Posted for the second time')
    res.end()
    }else{
        res.end(`Page not found ${res.statusCode=404}`)
    }
}
server7.listen(1234,()=> console.log('server is listening on port 1234'))

// Q.12
let server8 = http.createServer(handleServer5)
function handleServer5(req,res){
let parsedUrl = url.parse(req.url)
let pathName = parsedUrl.path
let email = parsedUrl.query
   if(req.method==='GET' && pathName==='/users?email=nodeserver@gmail.com'){
        res.write(`${email}`)
    res.end()
    }else{
        res.end(`Page not found ${res.statusCode=404}`)
    }
}
server8.listen(2020,()=> console.log('server is listening on port 2020'))