'use strict';

describe('Controller: ServiceLocalCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var ServiceLocalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceLocalCtrl = $controller('ServiceLocalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceLocalCtrl.awesomeThings.length).toBe(3);
  });
});
