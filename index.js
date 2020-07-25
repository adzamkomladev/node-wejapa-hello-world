const http = require('http');

const getHello = (request, response) => {
    response.statusCode = 200;
    response.end('Hello World, Welcome to WeJapa Internships');
};

const postHello = (request, response) => {
    let body = [];

    request.on('data', chunk => body.push(chunk)).on('end', () => {
        body = Buffer.concat(body).toString();
        body = JSON.parse(body);

        response.statusCode = 200;
        response.end(`Hello ${body.name}, Welcome to WeJapa Internships`);
    });
};

const server = http.createServer((request, response) => {
    const { url, method } = request;

    if (url === '/' && method === 'GET') {
        getHello(request, response);
    } else if (method === 'POST' && url === '/') {
        postHello(request, response);
    } else {
        response.statusCode = 404;
        response.end(`Route '${url}' with method '${method}' does not exist`);
    }
});

server.listen(3000);

server.on('listening', () => console.log('Server has started'));