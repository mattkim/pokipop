/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Pitch = require('../api/pitch/pitch.model'); 
var Bubble = require('../api/bubble/bubble.model'); 

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
      function(users) {
        console.log('Found Test.');
        console.log(users);

        Pitch.find({}).remove(function(){
          Pitch.create({
            title: 'Friends',
            tagline: 'A group of friends living life in New York getting into wacky antics.',
            projectPictureURL: 'https://s3-us-west-1.amazonaws.com/seedlyfoods/ff40e343-c481-45c5-8e9e-72b9f1fc4d19-babybear.jpg',
            subscriberCount: 77,
            user: users[0]._id,
            episodes: [{
              index: 0,
              title: 'We are friends',
              description: 'How they meet up',
              youtubelink: 'https://www.youtube.com/embed/V5hOm8_3mJA',
              projectPictureURL: 'https://s3-us-west-1.amazonaws.com/seedlyfoods/edded65f-1ad3-45bc-aab3-2de28fada162-blahblah+copy.jpg'
            },{
              index: 1,
              title: 'We are friends 2',
              description: 'How they meet up 2',
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
          },
          {
            title: 'Friends 2',
            tagline: 'A group of friends living life in New York getting into wacky antics.',
            projectPictureURL: 'https://s3-us-west-1.amazonaws.com/seedlyfoods/ff40e343-c481-45c5-8e9e-72b9f1fc4d19-babybear.jpg',
            subscriberCount: 77,
            user: users[0]._id,
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
          }, function(res){
             console.log('pitches created');
             Pitch.find({}).then(function(pitches){
               console.log(pitches);
               var pitch1 = pitches[0];
               var pitch2 = pitches[1];
              Bubble.find({}).remove(function() {
                  Bubble.create({
                    name:'A Beta Bubble',
                    tagline: 'A Beta Bubble Tagline',
                    profilePictureURL: 'https://s3-us-west-1.amazonaws.com/seedlyfoods/ff40e343-c481-45c5-8e9e-72b9f1fc4d19-babybear.jpg',
                    subscriberCount: 77,
                    showCount:10,
                    shows: [pitch1._id, pitch2._id]
                  },{
                    name:'A Beta Couple',
                    tagline: 'A Beta Couple Tagline',
                    profilePictureURL: 'https://s3-us-west-1.amazonaws.com/seedlyfoods/edded65f-1ad3-45bc-aab3-2de28fada162-blahblah+copy.jpg',
                    subscriberCount: 123456,
                    showCount:20,
                    shows: [pitch1._id, pitch2._id]
                  },
                    function(res){
                      console.log('bubbles created');
                      console.log(res);
                  });
              });
             });
          });
        });
      });
  });
});