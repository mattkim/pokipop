'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false
  }), auth.authSuccess)

 //  .get('/callback', function(req, res, next) {
 //  	  console.log('inner crap');
 //  	  console.log(req.body);
 //  	  console.log(req.query);

	//   passport.authenticate('facebook', function(err, user, info) {
	//   	console.log('innercrap');
	//     if (err) { return next(err); }
	//     if (!user) { return res.redirect('/login'); }
	//     req.logIn(user, function(err) {
	//       if (err) { return next(err); }
	//       return res.redirect('/');
	//     });
	//   })(req, res, next);
	// }, auth.setTokenCookie
 //  );

  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);

module.exports = router;