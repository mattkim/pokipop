'use strict';

angular.module('seedlyApp')
  .controller('UserprojectCtrl', function ($scope, $stateParams, $cookieStore, User, Pitch) {
  	var userid = $stateParams.userid;

    $scope.user = {};
    $scope.isCurrUser = false;
    
    if($cookieStore.get('token')) {
      $scope.user = User.get();

      // This means we are the current user so we can do things like edit.
      $scope.user.$promise.then(function() {
		if($scope.user._id === userid) {
      		$scope.isCurrUser = true;
      	}

      	console.log($scope.isCurrUser);
      });
      
    }

    Pitch.findByUser({id2:userid},
    	function(pitches) {
            console.log('return from findByUser');
            console.log(pitches);
    		$scope.pitches = pitches;
    	}, function(err) {
    		console.log(err);
    	}
    );
  });
