'use strict';

var _ = require('lodash');
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
// TODO: why do i need a separate transporter...
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pokipop.mailer@gmail.com',
        pass: 'pokipop777'
    }
});

exports.sendmail = function(email, token) {
  console.log('sending mail...');

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

exports.sendForgotPasswordMail = function(email, token) {
  console.log('sending forgotPasswordMail...');

  // TODO: update url.
  var url = 'http://localhost:9000/changepassword?email='+email+'&token='+token;

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'pokipop.mailer <pokipop.mailer@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'Reset your password with pokipop', // Subject line
      text: 'Hello world ' + url, // plaintext body
      html: '<b>Hello world</b> ' + url // html body
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

function handleError(res, err) {
  return res.status(500).send(err);
}