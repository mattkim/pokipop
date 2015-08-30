'use strict';

angular.module('seedlyApp')
  .controller('ChangepasswordCtrl', function ($scope, $stateParams, Auth) {
    var email = $stateParams.email;
    var token = $stateParams.token;

    $scope.resetPassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        console.log('resetPassword');
      	console.log(email);
      	console.log(token);
        console.log($scope.newPassword);

        Auth.forgotPassword(email, token, $scope.newPassword)
        .then( function() {
          console.log('Password successfully changed.');
        })
        .catch( function() {
          $scope.errors.other = 'Incorrect password';
          console.log($scope.errors);
        });
      }
    };
  });
