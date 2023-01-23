const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}));

app.get('/add-product', (req, res) => {
    try{
        res.write('<html><head><title>Document</title></head><body>');
        res.write(`<form action='/post' method="post"> 
                    <input type="text" name="name"/>
                    <input type="number" name="size"/>
                    <input type="submit">
                    </form>`)
        res.write(`</body></html>`)
        res.end();
    }
    catch(err){
        console.log(`Error : ${err}`);
    }
});

app.post('/post', (req, res) => {
    try{
        const userData = req.body;
        console.log(userData);
        res.send(userData);
    }
    catch(err){
        console.log(`Error : ${err}`);
    }
});
app.listen(3000);