const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    try{
        res.write('<html><head><title>Document</title></head><body>');
        res.write(`<h2>Register for chat!</h2><br>`);
        res.write(`<form action='/addUser' method="post" onsubmit="localStorage.setItem('username',document.getElementById('name').value)"> 
                <input type="text" id="name" name="name"/>
                <input type="submit"></form>`)
        res.write(`</body></html>`);
        res.end();        
    }
    catch(err){
        console.error(err);
    }
})

app.post('/addUser', (req, res) => {
    try{
        user = req.body.name;
        res.redirect('/chat');
    }
    catch(err){
        console.error(err);
    }
})

app.get('/chat', async (req, res) => {
    try{
        fs.readFile('./messages.txt', (err, data) => {
            if(err){
                console.error(err);
            }
            res.write('<html><head><title>Document</title></head><body>');
            res.write(`<h2>Welcome to chat!</h2><br>`);
            res.write(`<h4>${data.toString()}</h4><br>`);
            res.write(`<form action='/message' method="post" onsubmit="document.getElementById('name').value = localStorage.username"> 
                <input type="text" name="message"/>
                <input type="hidden" id="name" name="name"/>
                <input type="submit"></form>`)
            res.write(`</body></html>`);
            res.end();
        })
        
    }
    catch(err){
        console.error(err);
    }
});

app.post('/message', (req, res) => {
    try{
        const user = req.body.name;
        const message = req.body.message;
        console.log(`${user} : ${message}`);
        fs.appendFileSync('messages.txt', `\n${user} : ${message} <br>`, (err) => {
            console.error(err);
        })
        res.redirect('/chat')
    }
    catch(err){
        console.error(err);
    }
});



app.listen(3000);