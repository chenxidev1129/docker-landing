const fs = require('fs');
const path = require('path');

const publicPath = path.resolve(__dirname, 'public');
const buildPath = path.resolve(__dirname, '.next', 'server');

// Read the content of index.html
const indexHtmlContent = fs.readFileSync(path.join(publicPath, 'index.html'), 'utf8');

// Write the content of index.html to the build output directory
fs.writeFileSync(path.join(buildPath, 'index.html'), indexHtmlContent, 'utf8');
