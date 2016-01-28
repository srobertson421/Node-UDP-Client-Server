var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ':' + address.port) ;
});

server.on('message', function(message, remote) {
  console.log(remote.address + ':' + remote.port +' - ' + message);
  var message = new Buffer('This is a response!');
  server.send(message, 0, message.length, 33334, HOST);
});

server.bind(PORT, HOST);