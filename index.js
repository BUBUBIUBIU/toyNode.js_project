const fs = require('fs');
const http = require('http');

// read file following the absolute path
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8'); 
const laptopData = JSON.parse(json);

// create a server and each time someone get access my server
const server = http.createServer((req, res) => {
    // http status code + content type
    res.writeHead(404, {'Content-type': 'text/html'});
    res.end('This is the response!');
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for request now');
});
