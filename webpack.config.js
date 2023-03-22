const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib', 'server', 'public', 'js')
    }
}
