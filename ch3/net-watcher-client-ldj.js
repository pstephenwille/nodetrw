/**
 * Created by stephen on 1/1/15.
 */
'use strict';

const
    net = require('net'),
    ldj = require('./ldj.js'),
    netClient = net.connect({port: 5432}),
    ldjClient = ldj.connet(netClient);

ldjClient.on('message', function(msg) {
    if(msg.type === 'watching') {
        console.log('now watching: '+ msg.file);
    }else if(msg.type === 'changed') {
        let date = new Date(msg.timestamp);
        console.log('file '+ msg.file +' changed at '+ date);
    }else {
        throw Error('D\'oh!');
    }
});