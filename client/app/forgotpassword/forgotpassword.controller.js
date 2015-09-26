'use strict';

angular.module('seedlyApp')
  .controller('ForgotpasswordCtrl', function ($scope, User) {

    $scope.sendPasswordMail = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        console.log('forgotPassword');
        console.log($scope.email);

      	User.forgotPassword({
          email:$scope.email
        }).then(function(){
          console.log('email sent');
          $scope.emailSent = true;
        });
      }
    };
  });
