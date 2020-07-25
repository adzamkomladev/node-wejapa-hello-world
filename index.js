const http = require('http');

const server = http.createServer();

server.listen(3000);

server.on('listening', () => console.log('Server has started'));


