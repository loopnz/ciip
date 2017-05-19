'use strict';

describe('Service: $pcModal', function () {

  // load the service's module
  beforeEach(module('ciipApp'));

  // instantiate service
  var $pcModal;
  beforeEach(inject(function (_$pcModal_) {
    $pcModal = _$pcModal_;
  }));

  it('should do something', function () {
    expect(!!$pcModal).toBe(true);
  });

});
