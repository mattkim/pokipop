'use strict';

angular.module('seedlyApp')
  .controller('MainCtrl', function ($scope, $http, $cookieStore, socket, Pitch, User, Modal) {
    $scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
    }

    $scope.pitches = [];

    // TODO: limit this to 10 pitches
    $http.get('/api/pitches').success(function(pitches) {
      $scope.pitches = pitches;
      // TODO: hard code this one?
      $scope.pitch = pitches[0];

      console.log($scope.pitch);

      User.get({id:$scope.pitch.user}, function(res) {
            console.log('got user!');
            console.log(res);
            $scope.pitch.user = res;
        }, function(err) {
          console.log(err);
        });
      // Oh cool this is how it works where updates are immediate
      socket.syncUpdates('pitch', $scope.pitches);
    });

    $scope.open = function() {
      Modal.generic.open('app/watch/subscribemodal.html', $scope);
    };

    $scope.subscribe = function() {
      // There could be different costs.
      // Start out with a fixed cost?
      // Or allow the user to set their own cost?
      // Allow premium costs?
      console.log('subscribe!');
      // Also close modal....
      // Actually show a button for closing
      $scope.subscribed = true;
    };

    $scope.pitchit = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        console.log($scope.pitch);

        //TODO: validate that the genres list format is good and then split it.

        Pitch.save({
          title: $scope.pitch.title,
          description: $scope.pitch.description,
          genres: $scope.pitch.genres,
          youtubelink: $scope.pitch.youtubelink,
          makes: 0,
          retakes: 0
        }, function(data) {
          console.log(data);
        }, function(err) {
          console.log(err);
        });
      }
    };

    $scope.make = function(pitch) {
      console.log('make');
      console.log(pitch);
      pitch.makes = pitch.makes + 1;
      Pitch.update({id:pitch._id}, pitch);
    };

    $scope.retake = function(pitch) {
      console.log('retake');
      console.log(pitch);
      pitch.retakes = pitch.retakes + 1;
      Pitch.update({id:pitch._id}, pitch);
    };
  });
