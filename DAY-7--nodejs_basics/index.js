console.log("Node.js HTTP server code");

const http = require('http');

const server = http.createServer((res,req) => {
    res.writeHead(200,{'content-type': 'text/plate'});
    res.write('hello world');
    res.end;
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});


console.log("Setting Multiple Headers");
const server = http.createServer((req, res) => {
     res.writeHead(200, {
    'Content-Type': 'text/html',
    'X-Powered-By': 'Node.js',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Set-Cookie': 'sessionid=abc123; HttpOnly'
  });
 res.write('<h1 style="color:red";>Hello, World!</h1>');
 res.write(' <h1>This is a Heading</h1>');
 res.write('<p>This is a paragraph of text.</p>');
 res.end('<a href="https://example.com">This is a link</a>');
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
