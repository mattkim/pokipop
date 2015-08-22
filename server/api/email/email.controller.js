'use strict';

var _ = require('lodash');
var Email = require('./email.model');
var nodemailer = require('nodemailer');

exports.sendmail = function(email, token) {
  console.log('sending mail...');

  // create reusable transporter object using SMTP transport
  // TODO: why do i need a separate transporter...
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'pokipop.mailer@gmail.com',
          pass: 'pokipop777'
      }
  });

  var url = 'http://localhost:9000/api/users/verify?email='+email+'&token='+token;

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'pokipop.mailer <pokipop.mailer@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'Verify account with pokipop', // Subject line
      text: 'Hello world' + url, // plaintext body
      html: '<b>Hello world</b>' + url // html body
  };

  // 1. user creates account / set state to not active / store verification token
  // 2. send user email with account verification link / plus verification token
  // 3. when they hit the verify endpoint then for that email and token, if they match then flip state to active
  // and redirect to homepage.

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
  });
};

// Get list of emails
exports.index = function(req, res) {
  Email.find(function (err, emails) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(emails);
  });
};

// Get a single email
exports.show = function(req, res) {
  Email.findById(req.params.id, function (err, email) {
    if(err) { return handleError(res, err); }
    if(!email) { return res.status(404).send('Not Found'); }
    return res.json(email);
  });
};

// Creates a new email in the DB.
exports.create = function(req, res) {
  Email.create(req.body, function(err, email) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(email);
  });
};

// Updates an existing email in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Email.findById(req.params.id, function (err, email) {
    if (err) { return handleError(res, err); }
    if(!email) { return res.status(404).send('Not Found'); }
    var updated = _.merge(email, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(email);
    });
  });
};

// Deletes a email from the DB.
exports.destroy = function(req, res) {
  Email.findById(req.params.id, function (err, email) {
    if(err) { return handleError(res, err); }
    if(!email) { return res.status(404).send('Not Found'); }
    email.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}