'use strict';

angular.module('seedlyApp')
  .controller('WatchCtrl', function ($scope, $stateParams, $cookieStore, User, Pitch) {
    var pitchId = $stateParams.id;
    console.log(pitchId);
    $scope.pitch = {};

    Pitch.get({id:pitchId}, function(res) {
        console.log('got pitch!');
        console.log(res);
        $scope.pitch = res;

        User.get({id:$scope.pitch.user}, function(res) {
            console.log('got user!');
            console.log(res);
            $scope.user = res;
        });
    });
  });
