var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
    console.log('request event');

    response.writeHead(200, {'ContentType': 'text/plain'});
    response.end('Hello World\n');
});

server.on('connection', function() {
    console.log('connection event');
});

server.listen(3000, function() {
    console.log('listening event');
});

console.log('Server running on port 3000');