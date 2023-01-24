const path = require('path');
const rootDir = path.dirname(require.main.filename);

exports.showHome = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
}