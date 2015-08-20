/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Pitch = require('./pitch.model');

exports.register = function(socket) {
  Pitch.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Pitch.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('pitch:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pitch:remove', doc);
}