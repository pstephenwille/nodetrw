/**
 * Created by stephen on 1/2/15.
 */
const
    fs = require('fs'),
    zmq = require('zmq'),
    publisher = zmq.socket('pub'),
    filename = process.argv[2];

fs.watch(filename, function() {
    publisher.send(JSON.stringify({
        type:'changed',
        file:filename,
        timestamp:Date.now()
    }));
});


publisher.bind('tcp://*:5432', function(err) {
    if(err) { throw err; }

    console.log('listening for zmq subscribers...');
});