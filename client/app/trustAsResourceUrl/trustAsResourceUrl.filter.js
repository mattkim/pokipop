'use strict';

angular.module('seedlyApp')
  .filter('trustAsResourceUrl', function ($sce) {
    return function (input) {
      return $sce.trustAsResourceUrl(input);
    };
  });
