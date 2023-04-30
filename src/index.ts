import * as http from 'http';

const port = 8080;

http.createServer((_request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    const message = 'Hello World!';
    response.write(message);
    console.log(`Sent message: ${message}`);
    response.end();

}).listen(port);

console.log(`Server running at http://localhost:${port}/`);
