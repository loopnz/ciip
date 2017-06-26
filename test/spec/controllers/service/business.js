'use strict';

describe('Controller: ServiceBusinessCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var ServiceBusinessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceBusinessCtrl = $controller('ServiceBusinessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiceBusinessCtrl.awesomeThings.length).toBe(3);
  });
});
