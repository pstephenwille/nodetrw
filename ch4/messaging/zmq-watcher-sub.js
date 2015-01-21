/**
 * Created by stephen on 1/2/15.
 */
"use strict";

const 
    zmq = require('zmq'),
    subscriber = zmq.socket('sub');

subscriber.subscribe('');

subscriber.on('message', function(data) {
    let message = JSON.parse(data),
        date = new Date(message.timestamp);
    console.log('xxx ', message);
});

subscriber.connect('tcp://ubu:5432');