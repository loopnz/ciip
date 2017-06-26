'use strict';

describe('Controller: EmergencyEmergencyIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var EmergencyEmergencyIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmergencyEmergencyIndexCtrl = $controller('EmergencyEmergencyIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmergencyEmergencyIndexCtrl.awesomeThings.length).toBe(3);
  });
});
