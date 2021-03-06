'use strict';

angular.module('seedlyApp')
  .service('order', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      charge: function(token, amount) {
        var deferred = $q.defer();

        // TODO: we should move this to orders... and call charge
        // orders will call stripe
        $http.get('/api/orders/charge?token=' + token + '&amount=' + amount).then(
          function(res) {
            deferred.resolve(res);
          },
          function(err) {
            deferred.reject(err);
          }
        );

        return deferred.promise;
      }
    };
  });
