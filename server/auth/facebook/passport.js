var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User, config) {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'facebook.id': profile.id
      },
      function(err, user) {
        console.log('facebook passport');
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log(done);
        console.log(err);
        console.log(user);

        if (err) {
          return done(err);
        }

        // This means that if the user already exists don't recreate it.
        if (!user) {
          user = new User({
            name: profile.displayName, // TODO: add an email
            //email: profile.emails[0].value, // Sometimes email doesn't exist interesting.
            // TODO: create separate fb accounts for prod and test
            role: 'user',
            username: profile.username,
            provider: 'facebook',
            facebook: profile._json
          });
          user.save(function(err) {
            if (err) return done(err);
            done(err, user);
          });
        } else {
          return done(err, user);
        }
      })
    }
  ));
};
