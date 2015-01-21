"use strict";

const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];


if(!filename) {
    throw Error("no file named");
}

fs.watch(filename, function() {
    let ls = spawn('ls', ['-lh', filename]),
        output = ' ';
    
    ls.stdout.on('data', function(chunk) {
        output += chunk.toString();
    });
    
    ls.on('close', function() {
        let parts = output.split(/\s/);
        console.dir([ parts[1], parts[10] ]);
    });
});
console.log('now watching ' + filename + ' for changes');