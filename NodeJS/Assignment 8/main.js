const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const rootDir = path.dirname(require.main.filename);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    try{
        res.sendFile(path.join(rootDir, 'views', 'home.html'));
    }
    catch(err){
        console.error(err);
    }
})

app.get('/contact', (req, res) => {
    try{
        res.sendFile(path.join(rootDir, 'views', 'contact.html'));
    }
    catch(err){
        console.error(err);
    }
})

app.post('/addUser', (req, res) => {
    try{
        const {email, password} = req.body;
        console.log(email, password);
        res.redirect('/success');
    }
    catch(err){
        console.error(err);
    }
})

app.get('/success', (req, res) => {
    try{
        res.send('Form Subitted Successfully');
    }
    catch(err){
        console.error(err);
    }
})

app.get('*', (req, res) => {
    try{
        res.status(404).send('Page Not Found');
    }
    catch(err){
        console.error(err);
    }
})

app.listen(3000);