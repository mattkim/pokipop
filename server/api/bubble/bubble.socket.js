/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Bubble = require('./bubble.model');

exports.register = function(socket) {
  Bubble.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Bubble.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('bubble:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bubble:remove', doc);
}