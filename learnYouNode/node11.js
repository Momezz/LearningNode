const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(process.argv[3]);
    stream.pipe(res);
});
const port = process.argv[2] || 4000;
server.listen(port);