/**
 * Created by stephen on 1/2/15.
 */
    'use strict';

const
    events = require('events'),
    uitl = require('util'),
    
    LDJClient = function(stream) {
        events.EventEmitter.call(this);/* super.EventEmitter() */
        
        let
            self = this,
            buffer = '';
        stream.on('data', function(data) {
            buffer += data;

            let boundry = buffer.indexOf('\n');
            while(boundry !== -1) {
                let input = buffer.substr(boundry + 1);
                self.emit('message', JSON.parse(input));
                boundry = buffer.indexOf('\n');
            }
        });
    };


uitl.inherits(LDJClient, events.EventEmitter);/* LDJClient inherits from EventEmitter */

exports.LDJClient = LDJClient;
exports.connect = function(stream) {
    return new LDJClient(stream);
};