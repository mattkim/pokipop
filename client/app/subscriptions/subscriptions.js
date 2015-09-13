'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('subscriptions', {
        url: '/subscriptions',
        templateUrl: 'app/subscriptions/subscriptions.html',
        controller: 'SubscriptionsCtrl'
      });
  });