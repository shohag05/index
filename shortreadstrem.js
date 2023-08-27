const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/data.txt`, 'utf8');
    myReadStream.pipe(res);
});

server.listen(4500);

console.log('listening on port 4500');