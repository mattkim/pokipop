'use strict';

angular.module('seedlyApp')
  .controller('PitchCtrl', function ($scope, $cookieStore, User) {
  	$scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
    }

    // TODO: fix how defaults work use a separate default obj
    // TODO: add an 'available on distributions...'
    // maybe after it is created?
    // Add html5 wsywig.
    // Maybe just box out most important things and don't
    // support wsywig up front
    // Synopsis... actors?
    // Why are we building this?
    // Add a gallery section?
    // 

    // TODO: validate youtube urls are of the embedded type

    //TODO: add a date picker
    // TODO: validate the price
    // TODO: add comma in price display
    // TODO: build the fund button

    // TODO: ways to differntiate --> a better profile of the artists past work... like youtube links and photos
    // You're investing in the artist?

    // TODO: persist pitch to db
    // TODO: allow editing of pitch
    // TODO: allow saving drafts of the pitch?
    // TODO: allow seeing a list of your previous pitches
    // TODO: allow browsing for new pitches
    // TODO: see pitches on the front page.

    // TODO: add footers to the bottom of every page.

    // TODO: double check success/fail responses on every page.

    // TODO: photoshop the banner -- ask if someone can do it for me?
    

    $scope.message = 'Hello';
    $scope.editProject = true;
    $scope.pitch = {};
    $scope.pitch.title = 'Sample Title';
    $scope.pitch.tagline = 'This is a really funny show boss.';
    $scope.pitch.youtubelink = 'https://www.youtube.com/embed/-wrhr75cR4E';
    $scope.pitch.financegoal = 0;
    $scope.pitch.description = 'lorem ipsum';
    $scope.pitch.deadline = 'Aug 8. 2015';
    $scope.pitch.genres = 'comedy';
    $scope.pitch.episodes = 4;

    $scope.showEditProject = function() {
      $scope.editProject = true;
      $scope.editDescription = false;
      $scope.preview = false;
    };

    $scope.showEditDescription = function() {
      $scope.editProject = false;
      $scope.editDescription = true;
      $scope.preview = false;
    };

    $scope.showPreview = function() {
      $scope.editProject = false;
      $scope.editDescription = false;
      $scope.preview = true;
    };

  });
