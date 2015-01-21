const fs = require('fs');
fs.watch('target.txt', function () {
    console.log('file [target.txt] changed');
});

console.log('now watching target.text');