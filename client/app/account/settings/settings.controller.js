'use strict';

angular.module('seedlyApp')
  .controller('SettingsCtrl', function ($scope, $cookieStore, User, Auth, imgutil, s3) {
    $scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
      console.log('user loaded');
      console.log($scope.user);
      console.log($scope.user.email);
    }

    $scope.errors = {};
    $scope.facebook = Auth.getFacebook();
    $scope.twitter = Auth.getTwitter();
    $scope.local = Auth.getLocal();
  
    //console.log($scope.facebook);
    //console.log($scope.twitter);
    //console.log($scope.local);

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};

    $scope.updateSettings = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        console.log('updateSettings');
        console.log($scope.user);

        var file = $scope.profilePictureFile;
      
        if(file) {
          var name = file.name;
          var type = file.type;

          imgutil.loadImage(file).then(function(img) {
            if(imgutil.lessThanMaxFrameSize(img) && imgutil.lessThanMaxFileSize(file)) {
              s3.upload(name, type, file).then(
                function(res) {
                  $scope.user.profilePictureURL = res.imgurl;
                  //$scope.imageUpload = res.imageUpload;

                  // if password is not set, then 
                  Auth.updateUser($scope.user).then(
                    function() {
                      console.log('success?');
                    }).catch(function() {

                    }
                  );
                },
                function(err) {
                  console.log(err);
                }
              );
            } else {
              console.log('img is too large.');
            }
          });
        } else {
          Auth.updateUser($scope.user).then(
            function() {
              console.log('success?');
            }).catch(function() {

            }
          );
        }
      }
    };
  });
