'use strict';

describe('Controller: EmergencyCommandIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var EmergencyCommandIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmergencyCommandIndexCtrl = $controller('EmergencyCommandIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmergencyCommandIndexCtrl.awesomeThings.length).toBe(3);
  });
});
