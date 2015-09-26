'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'seedly-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  // S3 credentials
  s3: {
    access: process.env.AWS_ACCESS_KEY ||
            'noaccesskey',
    secret: process.env.AWS_SECRET_KEY ||
            'nosecretkey',
    bucket: 'seedlyfoods'
  },

  // Stripe credentials
  stripe: {
    sk: process.env.STRIPE_SK ||
        'nosk',
    pk: process.env.STRIPE_PK ||
        'nopk'
  },

  facebook: {
    clientID:     process.env.FACEBOOK_ID || '862754760440358',
    clientSecret: process.env.FACEBOOK_SECRET || '2c0b804003e4b05436717b06890c6605',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  twitter: {
    clientID:     process.env.TWITTER_ID || 'oiO6XBG4bD28laXl2lVTiMlwZ',
    clientSecret: process.env.TWITTER_SECRET || 'fdCP1IxR7pyzTBGFFohbMOGHXZox8nJF4rnK5eTnaBfh27msWC',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
