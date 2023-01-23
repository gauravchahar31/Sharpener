const path = require('path');
const rootDir = path.dirname(require.main.filename);

exports.renderContact = (req, res) => {
    try{
        res.sendFile(path.join(rootDir, 'views', 'contact.html'));
    }
    catch(err){
        console.error(err);
    }
}