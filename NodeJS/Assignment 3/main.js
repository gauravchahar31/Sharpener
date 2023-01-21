const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('Welcome to my NodeJS Project');
    }
    else if(req.url == '/home'){
        res.end('Welcome Home');
    }
    else if(req.url == '/about'){
        res.end('Welcome to About Page');
    }
    else if(req.url == '/node'){
        res.end('Welcome to my NodeJS Project');
    }
});

server.listen(4000);