var merahttp = require("http")

merahttp.createServer( 
    function (requestListen, requestResponse){
        requestResponse.writeHead(200,{'Content-Type':'text/plain'})
      requestResponse.end('Gaand marale')
    }).listen(8081)