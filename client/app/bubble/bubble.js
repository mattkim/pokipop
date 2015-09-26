'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bubble', {
        url: '/bubble/:id?:projectId',
        templateUrl: 'app/bubble/bubble.html',
        controller: 'BubbleCtrl'
      });
  });