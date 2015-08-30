/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Pitch = require('../api/pitch/pitch.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test',
    email: 'test@test.com',
    profilePictureURL: 'https://s3-us-west-1.amazonaws.com/pokipop/linkedinprofilepic.jpg',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Pitch.find({}).remove(function() {
  Pitch.create({
    title: 'Friends',
    description: 'A group of friends living life in New York getting into wacky antics.',
    genres: ['comedy', 'sitcom'],
    youtubelink: 'https://www.youtube.com/embed/V5hOm8_3mJA',
    makes: 77,
    retakes: 10,
    user: {
      name: 'test',
      profilePictureURL: 'https://s3-us-west-1.amazonaws.com/pokipop/linkedinprofilepic.jpg'
    }
  },{
    title: 'Seinfeld',
    description: 'A group of friends living life in New York getting into wacky antics but slightly differently.',
    genres: ['comedy', 'sitcom'],
    youtubelink: 'https://www.youtube.com/embed/PWBcd-Aq0D4',
    makes: 77,
    retakes: 10,
    user: {
      name: 'test',
      profilePictureURL: 'https://s3-us-west-1.amazonaws.com/pokipop/linkedinprofilepic.jpg'
    }
  },{
    title: 'How I Met Your Mother',
    description: 'A group of friends living life in New York getting into wacky antics even more differently.',
    genres: ['comedy', 'sitcom'],
    youtubelink: 'https://www.youtube.com/embed/aJtVL2_fA5w',
    makes: 77,
    retakes: 10,
    user: {
      name: 'test',
      profilePictureURL: 'https://s3-us-west-1.amazonaws.com/pokipop/linkedinprofilepic.jpg'
    }
  }, function() {
      console.log('finished populating users');
    }
  );
});