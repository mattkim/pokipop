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
  }, function(res) {
    console.log('finished populating users');

    User.find({name:'Test'}).then(
      function(user) {
        console.log(user);
        Pitch.find({}).remove(function() {
          Pitch.create({
            title: 'Friends',
            tagline: 'A group of friends living life in New York getting into wacky antics.',
            projectPictureURL: 'https://s3-us-west-1.amazonaws.com/seedlyfoods/ff40e343-c481-45c5-8e9e-72b9f1fc4d19-babybear.jpg',
            subscriberCount: 77,
            user: user._id,
            episodes: [{
              index: 0,
              title: 'We are friends',
              description: 'How they meet up',
              youtubelink: 'https://www.youtube.com/embed/V5hOm8_3mJA',
              projectPictureURL: 'https://s3-us-west-1.amazonaws.com/seedlyfoods/edded65f-1ad3-45bc-aab3-2de28fada162-blahblah+copy.jpg'
            }],
            offers: [{
              index: 0,
              price: 3,
              description: 'This is the basic subscription offering'
            },{
              index: 1,
              price: 10,
              description: 'This is the premium subscription offering'
            }]
          }, function() {
              console.log('finished populating pitches');
            }
          );
        });
      }
    );
  });
});