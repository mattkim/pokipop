'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forgotpassword', {
        url: '/forgotpassword',
        templateUrl: 'app/forgotpassword/forgotpassword.html',
        controller: 'ForgotpasswordCtrl'
      });
  });