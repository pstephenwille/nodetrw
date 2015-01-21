/**
 * Created by stephen on 1/1/15.
 */
'use strict';

const
    net = require('net'),
    client = net.connect({port: 5432});

client.on('data', function(data) {
    let msg = JSON.parse(data);
    
    if(msg.type === 'watching') {
        console.log('now watching: '+ msg.file);
    }else if(msg.type === 'changed') {
        let date = new Date(msg.timestamp);
        console.log(msg);
    }else {
        throw Error('oops!');
    }
});