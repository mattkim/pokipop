'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('changepassword', {
        url: '/changepassword?email&token',
        templateUrl: 'app/changepassword/changepassword.html',
        controller: 'ChangepasswordCtrl'
      });
  });