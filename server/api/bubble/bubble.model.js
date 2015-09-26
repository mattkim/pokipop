'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;

var OfferSchema = new Schema({
  index: Number,
  price: Number,
  description: String
});

var BubbleSchema = new Schema({
  name: String,
  tagline: String,
  active: Boolean,
  profilePictureURL: String,
  subscriberCount: Number,
  showCount: Number,
  offers: [OfferSchema],
  // TODO: double check this works
  shows: [{type:Schema.Types.ObjectId, ref:'Pitches', index: true}]
});

BubbleSchema.statics.findByShow = function(id, cb){
      console.log('BubbleSchema.statics.findByShow');
      console.log(id);
    return this.find({ shows: new ObjectId(id) }, cb);
  }

module.exports = mongoose.model('Bubble', BubbleSchema);