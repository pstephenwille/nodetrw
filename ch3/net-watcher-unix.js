/**
 * Created by stephen on 1/1/15.
 */
'use strict';

const
    fs = require('fs'),
    net = require('net'),
    filename = process.argv[2],
    server = net.createServer(function(connection) 
    {
        console.log('subscriber connected');
        connection.write('now watching ' + filename + ' for changes '+ '\n');
        
        let watcher = fs.watch(filename, function() {
            connection.write('file '+ filename +' changed '+ Date.now() +'\n')
        });
        
        connection.on('close', function() {
            console.log('disconnected');
            watcher.close();
        });
        
    });

if(! filename) {
    throw Error('file not found');
}

server.listen('/tmp/watch.sock', function() {
    console.log('listening on unix socket');
});
