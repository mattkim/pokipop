'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  profilePictureURL: String
});

var PitchSchema = new Schema({
  title: String,
  description: String,
  genres: [String],
  youtubelink: String,
  makes: Number,
  retakes: Number,
  user: {
    name: String,
    profilePictureURL: String
  }
});

module.exports = mongoose.model('Pitch', PitchSchema);