'use strict';

describe('Controller: ServiceLocaldetailCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var ServiceLocaldetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceLocaldetailCtrl = $controller('ServiceLocaldetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceLocaldetailCtrl.awesomeThings.length).toBe(3);
  });
});
