var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    var name = require('url').parse(request.url, true).query.name;

    if (name === undefined) {
        name = 'world!';
    }

    if (name === 'bob') {
        name = 'totally awesome, Bob!';
    }

    if (name == 'burningbird') {
        var file = 'phoenix5a.png';
        fs.stat(file, function(err, stat) {
            if (err) {
                console.error(err);
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('Sorry, Burningbird isn\'t around right now.\n');
            } else {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            }
        });
    } else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello '+name+'\n');
    }
}).listen(3000);