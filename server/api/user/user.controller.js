'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var email = require('../email/email.controller');
var uuid = require('node-uuid');

var validationError = function(res, err) {
  return res.status(422).json(err);
};

exports.verify = function(req, res) {
  console.log('verifying');
  var email = req.query.email;
  var token = req.query.token;
  console.log(email);
  console.log(token);

  User.findOne({email: email}, function(err, user) {
    console.log(user);
    // do stuff
    if(err) {
      console.log('error');
      return res.status(500).send(err);
    }
    if(user.activetoken !== token) {
      console.log('active token does not match');
      return res.status(500).send('active token does not match');
    }

    // if tokens match then flip to active
    user.status = 'active';
    user.activetoken = null;
    user.save(function(err) {
      if (err) return validationError(res, err);
      //res.status(200).send('OK');
      res.redirect('/');
    });
  });

  // verify if the token is legit, for this user.
  // if it is, then flip status to active
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  console.log("user.controller create");
  console.log(newUser);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.activetoken = uuid.v4();
  // TODO: what happens to user when its facebook.
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    // Send a conf email to users.
    email.sendmail(newUser.email, newUser.activetoken);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.status(401).send('Unauthorized');
    res.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.status(500).send(err);
    return res.status(204).send('No Content');
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.status(200).send('OK');
      });
    } else {
      res.status(403).send('Forbidden');
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.status(401).send('Unauthorized');
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
