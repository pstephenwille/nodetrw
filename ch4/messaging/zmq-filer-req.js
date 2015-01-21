/**
 * Created by stephen on 1/2/15.
 */
"use strict";
const
    zmq = require('zmq'),
    filename = process.argv[2],
    requester = zmq.socket('req');

requester.on('message', function(data) {
    let response = JSON.parse(data);
    console.log('received ', response);
});
requester.connect('tcp://ubu:5433');

console.log('sending req for ', filename);
requester.send(JSON.stringify({
    path:filename
}));

