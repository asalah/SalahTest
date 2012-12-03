/**
 * Created with JetBrains WebStorm.
 * User: mnawahda
 * Date: 12/3/12
 * Time: 5:02 PM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');