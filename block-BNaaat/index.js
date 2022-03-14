let http = require('http');
let fs = require('fs');

let server = http.createServer(handleServer);
function handleServer(req, res) {
  //using readfile
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('node.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
    // using createreadstream
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('node.html').pipe(res);
  } else{
    res.setHeader('Content-Type', 'text/html');
      res.end(`<h1> Page not found ${res.statusCode = 404} </h1>`)
  }
}

server.listen(5555, () => console.log('server is listening on port 5555'));
