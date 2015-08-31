'use strict';

describe('Controller: PitchCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var PitchCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PitchCtrl = $controller('PitchCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
