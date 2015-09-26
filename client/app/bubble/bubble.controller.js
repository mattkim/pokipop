'use strict';

angular.module('seedlyApp')
  .controller('BubbleCtrl', function ($scope, $stateParams, $http, $q, Pitch) {
  	var bubbleId = $stateParams.id;
  	console.log(bubbleId);

    var getPitch = function(id) {
      var deferred = $q.defer();

      Pitch.get({id:id},
        function(pitch){
          deferred.resolve(pitch);
      });

      return deferred.promise;
    };

    // TODO: create a service thing.
    $http.get('/api/bubbles/' + bubbleId).success(function(bubble) {
      $scope.bubble = bubble;
      console.log($scope.bubble);

      var promises = [];
      
      for(var i = 0; i < bubble.shows.length; i++) {
        promises.push(getPitch(bubble.shows[i]));
      }

      // TODO: there has to be a better way to do this.
      $q.all(promises).then(function(){
        console.log(promises);
        var shows = [];
        // Grab the promises?
        for(var i = 0; i < promises.length; i++) {
          shows.push(promises[i].$$state.value);
        }
        console.log(shows);
        $scope.shows = shows;
      });

    });
  });
