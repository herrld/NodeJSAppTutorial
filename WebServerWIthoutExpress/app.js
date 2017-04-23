var http = require('http');

server = http.createServer(RequestHandler);
server.listen(3030);

function RequestHandler(request, response)
{
    return response.end("test");
}