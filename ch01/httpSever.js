const http = require('http');

var server = http.createServer((req, res) => {
	res.end("Hello HTTP!!");
});

server.listen(8000);
console.log("hello joonyoung, this is node.js");
