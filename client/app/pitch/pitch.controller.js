'use strict';

angular.module('seedlyApp')
  .controller('PitchCtrl', function ($scope, $cookieStore, $location, $q, User, Pitch, imgutil, s3) {
  	$scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
    }

    $scope.editProject = true;
    
    $scope.pitch = {};
    $scope.pitch.subscriberCount = 0;
    $scope.pitch.episodes = [{index: 0}];

    $scope.pitch.offers = [{index: 0, price: 0}];

    $scope.previewPitch = {};
    $scope.previewPitch.title = 'Sample Title';
    $scope.previewPitch.tagline = 'This is a sample tagline, get your own!';
    $scope.previewPitch.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus ac neque nec varius. Proin eget nibh erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Donec viverra imperdiet dictum. Quisque in orci eu dolor gravida sagittis eget a mauris. Mauris dignissim augue a mi dictum sollicitudin. Duis auctor sed leo vel placerat. Donec auctor felis id est ornare, non eleifend quam finibus. Nam tristique maximus massa a placerat. Phasellus pretium eget nulla vitae ornare. Donec lobortis porttitor ante, eget faucibus ligula sagittis ut. Nunc eget ipsum efficitur, laoreet lectus et, mattis tortor. Etiam sollicitudin volutpat commodo. Sed eget mollis elit. Aenean commodo urna nec dolor consectetur ullamcorper. Quisque ullamcorper risus velit, vel cursus dui ultricies pharetra. Quisque imperdiet urna et purus iaculis lacinia. Integer rutrum lorem nisi, ac egestas urna dapibus a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ullamcorper purus felis, nec ullamcorper ipsum iaculis sed. Nulla ornare sagittis semper. Integer semper molestie pellentesque. Aliquam nisl ipsum, tempus ut ligula eget, viverra tincidunt orci. Nam quis vulputate massa. Donec a hendrerit diam. Fusce eu lacinia mi, quis blandit eros. Nulla malesuada aliquet nunc, in luctus mi facilisis sit amet. Cras ac viverra justo, at feugiat augue. Donec finibus lobortis dolor eget accumsan. Fusce scelerisque sagittis vulputate. Vestibulum interdum non mi vitae semper. Sed quis vulputate metus. Phasellus facilisis sapien sed libero commodo, sit amet ultricies ex interdum. Donec orci risus, mollis non risus in.';
    $scope.previewPitch.profilePictureURL = 'https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg';
    $scope.previewPitch.defaultVideoImageURL = 'https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg';
    $scope.previewPitch.subscriberCount = 0;
    $scope.previewPitch.episodes = [{index: 0, title: 'Sample Pitch Title', description: 'Sample description.'}];

    $scope.incrementEpisode = function(episode) {
      var index = episode.index;
      var next = index + 1;
      var max = $scope.pitch.episodes.length;

      console.log(index);
      console.log(max);

      // Basically we are at the max already
      if(index >= max - 1) {
        return;
      }

      // Swap
      var nextEpisode = $scope.pitch.episodes[next];
      var currEpisode = $scope.pitch.episodes[index];
      nextEpisode.index = index;
      currEpisode.index = next;
      $scope.pitch.episodes[index] = nextEpisode;
      $scope.pitch.episodes[next] = currEpisode;
    };

    $scope.decrementEpisode = function(episode) {
      var index = episode.index;
      var min = 0;
      var prev = index - 1;

      console.log(index);
      console.log(min);

      if(index <= min) {
        return;
      }

      var prevEpisode = $scope.pitch.episodes[prev];
      var currEpisode = $scope.pitch.episodes[index];
      prevEpisode.index = index;
      currEpisode.index = prev;
      $scope.pitch.episodes[index] = prevEpisode;
      $scope.pitch.episodes[prev] = currEpisode;
    };

    $scope.removeEpisode = function(episode) {
      var index = episode.index;
      
      $scope.pitch.episodes.splice(index, 1);

      for(var i = 0; i < $scope.pitch.episodes.length; i++) {
        $scope.pitch.episodes[i].index = i;
      }
    };

    $scope.addEpisode = function() {
      $scope.pitch.episodes.push({index: $scope.pitch.episodes.length});
    };

    $scope.addOffer = function() {
      $scope.pitch.offers.push({index: $scope.pitch.offers.length, price: 0});
    };

    // TODO: pass in the index to remove?
    $scope.removeOffer = function(offer) {
      var index = offer.index;
      
      $scope.pitch.offers.splice(index, 1);

      for(var i = 0; i < $scope.pitch.offers.length; i++) {
        $scope.pitch.offers[i].index = i;
      }
    };

    // TODO: check image size...
    var upload = function(ename, etype, efile, episode) {
      return s3.upload(ename, etype, efile).then(
        function(res) {
          episode.projectPictureURL = res.imgurl;
        },
        function(err) {
          console.log(err);
        }
      );
    };

    $scope.pitchit = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        console.log('uploading images...');

        var file = $scope.pitch.projectPictureFile;
        var name = file.name;
        var type = file.type;

        var promises = [];
        promises.push(upload(name, type, file, $scope.pitch));

        for(var i = 0; i < $scope.pitch.episodes.length; i++) {
          var episode = $scope.pitch.episodes[i];
          var efile = episode.projectPictureFile;
          var ename = efile.name;
          var etype = efile.type;

          promises.push(upload(ename, etype, efile, episode));
        }

        $q.all(promises).then(
          function() {
            console.log('all s3 uploads completed!');
            console.log($scope.pitch);

            // Set the owning user.
            $scope.pitch.user = $scope.user._id;

            Pitch.save(
              $scope.pitch,
              function(data) {
                console.log(data);
                // Go to the project page.
                $location.path('/watch/' + data._id);
              }, function(err) {
                console.log(err);
            });
          }
        );
      }
    };

    $scope.showOffers = function() {
      $scope.editProject = false;
      $scope.editDescription = false;
      $scope.preview = false;
      $scope.showOffersFlag = true;
    };

    $scope.showEditProject = function() {
      $scope.editProject = true;
      $scope.editDescription = false;
      $scope.preview = false;
      $scope.showOffersFlag = false;
    };

    $scope.showEditDescription = function() {
      $scope.editProject = false;
      $scope.editDescription = true;
      $scope.preview = false;
      $scope.showOffersFlag = false;
    };

    $scope.showPreview = function() {
      $scope.editProject = false;
      $scope.editDescription = false;
      $scope.preview = true;
      $scope.showOffersFlag = false;
    };

  });
