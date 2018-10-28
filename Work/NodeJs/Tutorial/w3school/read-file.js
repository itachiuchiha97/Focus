var http = require('http');
var filesys = require('fs');
http.createServer(function (req, res) {
    filesys.readFile('html-read.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);