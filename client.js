var PORT = 33334;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer('Hello there!');
console.log(message.length);

var client = dgram.createSocket('udp4');

client.on('message', function(message, remote) {
  console.log('A return message! ' + message);
});

client.bind(PORT, HOST);

client.send(message, 0, message.length, 33333, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + HOST +':'+ PORT);
});