const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    try{
        res.send('Admin Home');
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;