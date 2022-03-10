var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);
// - console parsedUrl.pathname
console.log(parsedUrl.pathname);

// - console parsedUrl.query
console.log(parsedUrl.query);

// - console.log parsed Url host and protocol
console.log(parsedUrl.host,parsedUrl.protocol);


// Do a request on google.com and view headers inside developer's network
//  tab by clicking on a specific request
let google = url.parse('google.com')
console.log(google)