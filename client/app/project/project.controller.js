'use strict';

angular.module('seedlyApp')
  .controller('ProjectCtrl', function ($scope, $stateParams, $cookieStore, User, Pitch) {
  	$scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
    }

    $scope.message = 'Hello';
    var pitchId = $stateParams.id;
    console.log(pitchId);
    $scope.pitch = {};

    Pitch.get({id:pitchId}, function(res) {
    	console.log('got pitch!');
    	console.log(res);
    	$scope.pitch = res;
    });
  });
