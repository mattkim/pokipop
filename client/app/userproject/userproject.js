'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('userproject', {
        url: '/userproject/:userid',
        //url: '/userproject',
        templateUrl: 'app/userproject/userproject.html',
        controller: 'UserprojectCtrl'
      });
  });