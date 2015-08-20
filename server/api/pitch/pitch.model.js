'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PitchSchema = new Schema({
  title: String,
  description: String,
  genres: [String],
  youtubelink: String,
  makes: Number,
  retakes: Number
});

module.exports = mongoose.model('Pitch', PitchSchema);