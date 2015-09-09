'use strict';

angular.module('seedlyApp')
  .controller('WatchCtrl', function ($scope) {
    
    $scope.pitch = {};
    $scope.pitch.title = 'Sample Title';
    $scope.pitch.tagline = 'This is a sample tagline, get your own!';
    $scope.pitch.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus ac neque nec varius. Proin eget nibh erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Donec viverra imperdiet dictum. Quisque in orci eu dolor gravida sagittis eget a mauris. Mauris dignissim augue a mi dictum sollicitudin. Duis auctor sed leo vel placerat. Donec auctor felis id est ornare, non eleifend quam finibus. Nam tristique maximus massa a placerat. Phasellus pretium eget nulla vitae ornare. Donec lobortis porttitor ante, eget faucibus ligula sagittis ut. Nunc eget ipsum efficitur, laoreet lectus et, mattis tortor. Etiam sollicitudin volutpat commodo. Sed eget mollis elit. Aenean commodo urna nec dolor consectetur ullamcorper. Quisque ullamcorper risus velit, vel cursus dui ultricies pharetra. Quisque imperdiet urna et purus iaculis lacinia. Integer rutrum lorem nisi, ac egestas urna dapibus a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ullamcorper purus felis, nec ullamcorper ipsum iaculis sed. Nulla ornare sagittis semper. Integer semper molestie pellentesque. Aliquam nisl ipsum, tempus ut ligula eget, viverra tincidunt orci. Nam quis vulputate massa. Donec a hendrerit diam. Fusce eu lacinia mi, quis blandit eros. Nulla malesuada aliquet nunc, in luctus mi facilisis sit amet. Cras ac viverra justo, at feugiat augue. Donec finibus lobortis dolor eget accumsan. Fusce scelerisque sagittis vulputate. Vestibulum interdum non mi vitae semper. Sed quis vulputate metus. Phasellus facilisis sapien sed libero commodo, sit amet ultricies ex interdum. Donec orci risus, mollis non risus in.';
    $scope.pitch.profilePictureURL = 'https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg';
    $scope.pitch.defaultVideoImageURL = 'https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg';
    $scope.pitch.subscriberCount = 777;
    $scope.pitch.episodes = [
    	{
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 1',
    		tagline: 'This is the tagline for episode 1'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}, {
    		imgurl: 'http://images.closerweekly.com/uploads/posts/image/52686/house-of-cards.jpg',
    		title: 'Episode 2',
    		tagline: 'This is the tagline for episode 2'
    	}
    ];
  });
