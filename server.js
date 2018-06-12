var http = require('http');


var server = http.createServer(function(req, res) {


  res.end('coucou!');

});

server.listen(8080);
