'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;

var UserSchema = new Schema({
  name: String,
  profilePictureURL: String
});

var EpisodeSchema = new Schema({
  index: Number,
  title: String,
  description: String,
  projectPictureURL: String,
  youtubelink: String
});

// TODO: Double check that this schema works.
var OfferSchema = new Schema({
  index: Number,
  price: Number,
  description: String
});

var PitchSchema = new Schema({
  title: String,
  tagline: String,
  projectPictureURL: String,
  subscriberCount: Number,
  episodes: [EpisodeSchema],
  offers: [OfferSchema],
  user: {type:Schema.Types.ObjectId, ref:'Users', index: true}
});

PitchSchema.statics.findByUser = function(id, cb){
      console.log('PitchSchema.statics.findByUser');
      console.log(id);
    return this.find({ user: new ObjectId(id) }, cb);
  }

module.exports = mongoose.model('Pitch', PitchSchema);