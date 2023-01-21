const http = require('http')

const server = http.createServer((req, res) => {
    console.log("Gaurav")
});

server.listen(4000);