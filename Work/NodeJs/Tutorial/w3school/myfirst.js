// creates a server with helloworld


var http = require('http') //require used to include a module
var meramoduletry = require('./myfirstmodule')


//creates a server object
http.createServer(function(request , response){ //The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
    //response.writeHead(200, {'Content-Type':'text/plain'}) //If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
    response.write('Gaandu oyrreaskjdnkjsadeee'+ '\n'+ meramoduletry.meraDateTime()) //writing response to client
    //response.write(request.url) // this is the address or url after 8080 we're requesting from browser
    response.end() //use write or put parameters in end(here) to write

}).listen(8080) //The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.

