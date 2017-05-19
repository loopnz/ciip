'use strict';

describe('Service: $loadTemplate', function () {

  // load the service's module
  beforeEach(module('ciipApp'));

  // instantiate service
  var $loadTemplate;
  beforeEach(inject(function (_$loadTemplate_) {
    $loadTemplate = _$loadTemplate_;
  }));

  it('should do something', function () {
    expect(!!$loadTemplate).toBe(true);
  });

});
