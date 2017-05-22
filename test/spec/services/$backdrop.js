'use strict';

describe('Service: $backdrop', function () {

  // load the service's module
  beforeEach(module('ciipApp'));

  // instantiate service
  var $backdrop;
  beforeEach(inject(function (_$backdrop_) {
    $backdrop = _$backdrop_;
  }));

  it('should do something', function () {
    expect(!!$backdrop).toBe(true);
  });

});
