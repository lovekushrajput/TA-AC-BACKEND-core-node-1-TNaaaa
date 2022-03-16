let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  let method = req.method;

  if (method === 'GET' && req.url === '/') {
    fs.readFile('./../../application/index.html', (err, content) => {
      if (err) return err;
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    });
  } else if (method === 'GET' && req.url === '/about') {
    fs.readFile('./../../application/about.html', (err, content) => {
      if (err) return err;
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('../stylesheets' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'jpg') {
    // set header for images file
    res.setHeader('Content-Type', 'image/jpeg');
    // read images and send it in response
    fs.readFile('../images' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(3000, () => console.log('server is listening on port 3000'));
