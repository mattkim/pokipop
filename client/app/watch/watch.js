'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('watch', {
        url: '/watch/:id',
        templateUrl: 'app/watch/watch.html',
        controller: 'WatchCtrl'
      });
  });