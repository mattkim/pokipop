'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;

var UserSchema = new Schema({
  name: String,
  profilePictureURL: String
});

var PitchSchema = new Schema({
  title: String,
  tagline: String,
  description: String,
  genres: [String],
  projectPictureURL: String,
  youtubelink: String,
  makes: Number,
  user: {type:Schema.Types.ObjectId, ref:'Users', index: true}
});

PitchSchema.statics.findByUser = function(id, cb){
      console.log('PitchSchema.statics.findByUser');
      console.log(id);
    return this.find({ user: new ObjectId(id) }, cb);
  }

module.exports = mongoose.model('Pitch', PitchSchema);