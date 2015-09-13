'use strict';

angular.module('seedlyApp')
  .controller('WatchCtrl', function ($scope, $stateParams, $cookieStore, User, Pitch, Modal) {
    var pitchId = $stateParams.id;
    console.log(pitchId);

    $scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
    }

    $scope.pitch = {};

    $scope.currOffer = {};

    // TODO: i'm pretty sure this is a super hacky way to do this.
    $scope.setCurrOffer = function(offer) {
        console.log('currOffer');
        console.log(offer);
        $scope.currOffer = offer;
    };

    //$scope.user = {};

    //if($cookieStore.get('token')) {
    //  $scope.user = User.get();
    //}

    $scope.open = function() {
      $scope.justSubscribed = false;
      Modal.generic.open('app/watch/subscribemodal.html', $scope);
    };

    $scope.subscribe = function(form) {
        // There could be different costs.
        // Start out with a fixed cost?
        // Or allow the user to set their own cost?
        // Allow premium costs?
        console.log('subscribe!');
        console.log(form);
        // console.log($scope.currOffer);
        // Also close modal....
        // Actually show a button for closing

        var userOffers = $scope.user.offers;

        if(userOffers === null || userOffers === undefined) {
            userOffers = [];
            $scope.user.offers = [];
        }

        //$scope.user.offers;
        $scope.user.offers.push($scope.currOffer);

        
        $scope.subscribed = true;
        $scope.justSubscribed = true;

        // Should save this to the db now.
    };

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
