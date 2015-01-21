/**
 * Created by stephen on 1/1/15.
 */
'use strict';

const
    net = require('net'),
    filename = process.argv[2],
    server = net.createServer(function(connection) {
        console.log('subscriber connected');

        connection.write('{"type": "changed","file": targ');

        let timer = setTimeout(function() {
            connection.write('et.txt", "timestamp":11111111111111}' + '\n');
        }, 1000);
        
        connection.on('end', function() {
            clearTimeout(timer);
            console.log('subscriber disconnected');
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
