'use strict';

var _ = require('lodash');
var Bubble = require('./bubble.model');


exports.findByShow = function(req, res) {
  console.log(req.params);
  var id = req.params.id2;
  // TODO: note this returns a collection
  Bubble.findByShow(id, function(err, bubbles) {
    res.status(200).json(bubbles);
  });
};

// Get list of bubbles
exports.index = function(req, res) {
  Bubble.find(function (err, bubbles) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(bubbles);
  });
};

// Get a single bubble
exports.show = function(req, res) {
  Bubble.findById(req.params.id, function (err, bubble) {
    if(err) { return handleError(res, err); }
    if(!bubble) { return res.status(404).send('Not Found'); }
    return res.json(bubble);
  });
};

// Creates a new bubble in the DB.
exports.create = function(req, res) {
  Bubble.create(req.body, function(err, bubble) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(bubble);
  });
};

// Updates an existing bubble in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bubble.findById(req.params.id, function (err, bubble) {
    if (err) { return handleError(res, err); }
    if(!bubble) { return res.status(404).send('Not Found'); }
    var updated = _.merge(bubble, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(bubble);
    });
  });
};

// Deletes a bubble from the DB.
exports.destroy = function(req, res) {
  Bubble.findById(req.params.id, function (err, bubble) {
    if(err) { return handleError(res, err); }
    if(!bubble) { return res.status(404).send('Not Found'); }
    bubble.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}