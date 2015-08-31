'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pitch', {
        url: '/pitch',
        templateUrl: 'app/pitch/pitch.html',
        controller: 'PitchCtrl'
      });
  });