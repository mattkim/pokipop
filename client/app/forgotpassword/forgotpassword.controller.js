'use strict';

angular.module('seedlyApp')
  .controller('ForgotpasswordCtrl', function ($scope, User) {
    $scope.message = 'Hello';
    $scope.sendPasswordMail = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        console.log($scope.email);
      	//Send the email to this email address to reset their password.
      	User.forgotPassword({
          email:$scope.email // TODO: not sure if this will send as a get param
        });
      }
    };
  });
