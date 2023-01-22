const http = require('http');
const fs = require('fs');

let message;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    fs.readFile('message.txt', (err, data) => {
        if(data){
            message = data.toString();
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(
              `<body>${message}<br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
            );
            res.write('</html>');
            return res.end();
        }
        else{
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(
              `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
            );
            res.write('</html>');
            return res.end();
        }
    })
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      fs.writeFile('message.txt', message, err => {
        res.writeHead(302, {Location : '/'});
        return res.end();
      });
    });
  }
});

server.listen(3000);