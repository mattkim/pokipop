'use strict';

angular.module('seedlyApp')
  .controller('ChangepasswordCtrl', function ($scope, $stateParams, Auth) {
    $scope.message = 'Hello';
    // Grab the query parameters...
    var email = $stateParams.email;
    var token = $stateParams.token;

    // TODO: use this controller instead
    // Then when the user enters the new password, pass in these values
    $scope.resetPassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
      	console.log(email);
      	console.log(token);
        console.log($scope.newPassword);

        Auth.forgotPassword(email, token, $scope.newPassword)
        .then( function() {
          $scope.message = 'Password successfully changed.';
          console.log($scope.message);
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          console.log($scope.errors);
          $scope.message = '';
        });
      }
    };
  });
