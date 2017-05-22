'use strict';

describe('Service: $pcPopup', function () {

  // load the service's module
  beforeEach(module('ciipApp'));

  // instantiate service
  var $pcPopup;
  beforeEach(inject(function (_$pcPopup_) {
    $pcPopup = _$pcPopup_;
  }));

  it('should do something', function () {
    expect(!!$pcPopup).toBe(true);
  });

});
