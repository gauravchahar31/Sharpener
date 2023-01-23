const path = require('path');
const rootDir = path.dirname(require.main.filename);

exports.formSuccess = (req, res) => {
    try{
        res.send('Form Subitted Successfully');
    }
    catch(err){
        console.error(err);
    }
}
