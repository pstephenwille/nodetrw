/**
 * Created by stephen on 1/1/15.
 */

const
fs = require('fs');
fs.writeFile('target.txt', '\nwritten by nodeJS\n', function(err) {
    if(err){ throw err; }
    console.log('saved');
});

