'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/seedly-test'
  },
  
  // S3 credentials
  s3: {
    access: 'AKIAJQY25SY5GMDSITFA',
    secret: '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',
    bucket: 'seedlyfoods'
  },

  // Stripe credentials
  stripe: {
    sk: process.env.STRIPE_SK ||
        'nosk',
    pk: process.env.STRIPE_PK ||
        'nopk'
  }
};