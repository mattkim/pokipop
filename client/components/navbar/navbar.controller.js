'use strict';

angular.module('seedlyApp')
  .controller('NavbarCtrl', function ($scope, $location, $cookieStore, User, Auth, socket) {
    $scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
      $scope.users = [$scope.user];
      // TODO: figure out this socket thing.
      socket.syncUpdates('user', $scope.users);
    }

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.isBuyer = Auth.isBuyer;
    $scope.isSeller = Auth.isSeller;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });