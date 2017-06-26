'use strict';

describe('Controller: EmergencyEmergencyDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var EmergencyEmergencyDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmergencyEmergencyDetailCtrl = $controller('EmergencyEmergencyDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmergencyEmergencyDetailCtrl.awesomeThings.length).toBe(3);
  });
});
