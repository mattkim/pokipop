'use strict';

angular.module('seedlyApp')
  .controller('PitchCtrl', function ($scope, $cookieStore, User) {
  	$scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
    }

    // IMPORTANT TODOs:
    // TODO: fix how defaults work use a separate default obj


    // TODO: validate youtube urls are of the embedded type
    // TODO: add a date picker
    // TODO: validate the price
    // TODO: add comma in price display
    // TODO: build the fund button - make it a modal
    // TODO: persist pitch to db
    // TODO: allow editing of pitch
    // TODO: allow seeing a list of your previous pitches
    // TODO: allow browsing for new pitches
    // TODO: see pitches on the front page.
    // TODO: add footers to the bottom of every page.
    // TODO: double check success/fail responses on every page.
    // TODO: photoshop the banner -- ask if someone can do it for me?


    // TODO: build pooling. -- i can kind of launch before pooling... lol bc it will take a month?
    // Because I can do it manually? haha.  If i only have 1 thing.



    // TODO: add an 'available on distributions...'
    // maybe after it is created?
    // Add html5 wsywig.
    // Maybe just box out most important things and don't
    // support wsywig up front
    // Synopsis... actors?
    // Why are we building this?
    // Add a gallery section?
    // 

    // TODO: ways to differntiate --> a better profile of the artists past work... like youtube links and photos
    // You're investing in the artist?
    // TODO: have links for producers and directors -- add a link to imdb?

    
    // TODO: allow saving drafts of the pitch?
    

    

    // TODO: i have to build pooling into this....
    // TODO: if the funds meet the target then greenlight it--and then charge everyone all at once and then fund the comic
    // TODO: 1. how do i fund the comic?
    // TODO: 2. how do i charge everyone all at once?  Well they need to add their cc.. what if they remove their cc?  can't allow them to
    // TODO: 3. if it doesn't meet the bar then delete all cc.

    $scope.message = 'Hello';
    $scope.editProject = true;
    
    $scope.pitch = {};

    $scope.previewPitch = {};
    $scope.previewPitch.title = 'Sample Title';
    $scope.previewPitch.tagline = 'This show is hillarious.';
    $scope.previewPitch.youtubelink = 'https://www.youtube.com/embed/-wrhr75cR4E';
    $scope.previewPitch.financegoal = 0;
    $scope.previewPitch.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus ac neque nec varius. Proin eget nibh erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Donec viverra imperdiet dictum. Quisque in orci eu dolor gravida sagittis eget a mauris. Mauris dignissim augue a mi dictum sollicitudin. Duis auctor sed leo vel placerat. Donec auctor felis id est ornare, non eleifend quam finibus. Nam tristique maximus massa a placerat. Phasellus pretium eget nulla vitae ornare. Donec lobortis porttitor ante, eget faucibus ligula sagittis ut. Nunc eget ipsum efficitur, laoreet lectus et, mattis tortor. Etiam sollicitudin volutpat commodo. Sed eget mollis elit. Aenean commodo urna nec dolor consectetur ullamcorper. Quisque ullamcorper risus velit, vel cursus dui ultricies pharetra. Quisque imperdiet urna et purus iaculis lacinia. Integer rutrum lorem nisi, ac egestas urna dapibus a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ullamcorper purus felis, nec ullamcorper ipsum iaculis sed. Nulla ornare sagittis semper. Integer semper molestie pellentesque. Aliquam nisl ipsum, tempus ut ligula eget, viverra tincidunt orci. Nam quis vulputate massa. Donec a hendrerit diam. Fusce eu lacinia mi, quis blandit eros. Nulla malesuada aliquet nunc, in luctus mi facilisis sit amet. Cras ac viverra justo, at feugiat augue. Donec finibus lobortis dolor eget accumsan. Fusce scelerisque sagittis vulputate. Vestibulum interdum non mi vitae semper. Sed quis vulputate metus. Phasellus facilisis sapien sed libero commodo, sit amet ultricies ex interdum. Donec orci risus, mollis non risus in.';
    $scope.previewPitch.deadline = 'Month Day Year';
    $scope.previewPitch.genres = 'sketch-comedy';
    $scope.previewPitch.episodes = 0;
    $scope.previewPitch.profilePictureURL = 'https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg';

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
