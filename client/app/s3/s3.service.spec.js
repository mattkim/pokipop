'use strict';

describe('Service: s3', function () {

  // load the service's module
  beforeEach(module('seedlyApp'));

  // instantiate service
  var s3;
  beforeEach(inject(function (_s3_) {
    s3 = _s3_;
  }));

  it('should do something', function () {
    expect(!!s3).toBe(true);
  });

});
