'use strict';

describe('Controller: UserprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var UserprojectCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserprojectCtrl = $controller('UserprojectCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
