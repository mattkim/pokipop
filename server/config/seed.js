/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Pitch = require('../api/pitch/pitch.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    customerType: 'admin'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    customerType: 'admin'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Buyer',
    email: 'buyer@buyer.com',
    password: 'buyer',
    customerType: 'buyer'
  }, {
    provider: 'local',
    role: 'user',
    name: 'Seller',
    email: 'seller@seller.com',
    password: 'seller',
    customerType: 'seller'
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
    retakes: 10
  },{
    title: 'Seinfeld',
    description: 'A group of friends living life in New York getting into wacky antics but slightly differently.',
    genres: ['comedy', 'sitcom'],
    youtubelink: 'https://www.youtube.com/embed/PWBcd-Aq0D4',
    makes: 77,
    retakes: 10
  },{
    title: 'How I Met Your Mother',
    description: 'A group of friends living life in New York getting into wacky antics even more differently.',
    genres: ['comedy', 'sitcom'],
    youtubelink: 'https://www.youtube.com/embed/aJtVL2_fA5w',
    makes: 77,
    retakes: 10
  }, function() {
      console.log('finished populating users');
    }
  );
});