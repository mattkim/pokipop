'use strict';

angular.module('seedlyApp')
  .controller('SettingsCtrl', function ($scope, $cookieStore, $q, socket, User, Auth, imgutil, s3) {
    $scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
      $scope.users = [$scope.user];
      // TODO: figure this out
      socket.syncUpdates('user', $scope.users);
    }
 
    $scope.profileErrors = [];
    $scope.profileSuccess = {};
    $scope.passwordErrors = [];
    $scope.passwordSuccess = {};
    $scope.errors = {};
    $scope.facebook = Auth.getFacebook();
    $scope.twitter = Auth.getTwitter();
    $scope.local = Auth.getLocal();

    var upload = function(file) {
      return $q(function(){
        var name = file.name;
        var type = file.type;

        // THis should be part of the image upload
        imgutil.loadImage(file).then(function(img) {
          if(imgutil.lessThanMaxFrameSize(img) && imgutil.lessThanMaxFileSize(file)) {
            s3.upload(name, type, file).then(
              function(res) {
                $scope.user.profilePictureURL = res.imgurl;
              },
              function(err) {
                console.log(err);
                $scope.profileErrors.push({message: 'Uploading image failed.'});
              }
            );
          } else {
            console.log('Image failed to upload because it is too large.');
            $scope.profileErrors.push({message: 'Image failed to upload because it is too large.'});
          }
        });
      });
    };

    var updateUser = function() {
      Auth.updateUser($scope.user).then(
        function() {
          console.log('user updated');
          $scope.profileSuccess.message = 'User settings successfully updated!';
        }
      ).catch(function(err) {
          console.log(err);
          $scope.profileErrors.push({message: 'Unable to update user settings.'});
      });
    };

    $scope.updateSettings = function(form) {
      $scope.submitted = true;
      $scope.profileSuccess = {};
      $scope.profileErrors = [];

      if(form.$valid) {
        console.log('updateSettings');

        var promise = null;

        var file = $scope.profilePictureFile;
      
        if(file) {
          promise = upload(file);
          promise.then(updateUser());
        } else {
          updateUser();
        }
      }
    };

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      $scope.passwordErrors = [];
      $scope.passwordSuccess = {};

      Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
      .then( function() {
        $scope.passwordSuccess.message = 'Password successfully changed.';
      })
      .catch( function(err) {
        form.password.$setValidity('mongoose', false);
        console.log(err);
        $scope.passwordErrors = [{message: 'Error updating password.'}];
      });
    };

  });
