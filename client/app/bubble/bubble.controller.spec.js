'use strict';

describe('Controller: BubbleCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var BubbleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BubbleCtrl = $controller('BubbleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
