const path = require('path');
const rootDir = path.dirname(require.main.filename);

exports.showHome = (req, res) => {
    try{
        res.sendFile(path.join(rootDir, 'views', 'index.html'));
    }
    catch(err){
        console.error(err);
    }
}