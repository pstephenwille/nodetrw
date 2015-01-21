/**
 * Created by stephen on 1/1/15.
 */
'use strict';

const
    fs = require('fs'),
    net = require('net'),
    filename = process.argv[2],
    server = net.createServer(function(connection) {
        console.log('subscriber connected');
        connection.write(JSON.stringify({
            "type": "watching",
            "file": filename
        }) + '\n');

        let watcher = fs.watch(filename, function() {
            connection.write(JSON.stringify({
                "type": "changed",
                "file": filename,
                "timestamp": Date.now()
            }) + '\n');
        });
        
        connection.on('close', function() {
            console.log('disconnected');
            watcher.close();
        });

    });

if(!filename) {
    throw Error('file not found');
}

server.listen(5431, function() {
    console.log('server started');
});
