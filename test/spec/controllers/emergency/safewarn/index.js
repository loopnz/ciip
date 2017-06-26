'use strict';

describe('Controller: EmergencySafewarnIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var EmergencySafewarnIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmergencySafewarnIndexCtrl = $controller('EmergencySafewarnIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmergencySafewarnIndexCtrl.awesomeThings.length).toBe(3);
  });
});
