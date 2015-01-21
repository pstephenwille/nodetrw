/**
 * Created by stephen on 1/2/15.
 */
"use strict";

const 
    fs = require('fs'),
    zmq = require('zmq'),
    responder = zmq.socket('rep');

responder.on('message', function(data) {
    let request = JSON.parse(data);
    console.log('recieved req to get: ', request.path);
    
    fs.readFile(request.path, function(err, content) {
        console.log('sending resp content');
        responder.send(JSON.stringify({
            content: content.toString(),
            timestamp: Date.now(),
            pid:process.pid
        }));
    });
});

responder.bind('tcp://127.0.0.1:5433', function(err) {
    console.log('listen for zmq');
});
process.on('SIGINT', function() {
    console.log('shutting down');
    responder.close();
});