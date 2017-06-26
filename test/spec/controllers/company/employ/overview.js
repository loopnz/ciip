'use strict';

describe('Controller: CompanyEmployOverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var CompanyEmployOverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyEmployOverviewCtrl = $controller('CompanyEmployOverviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyEmployOverviewCtrl.awesomeThings.length).toBe(3);
  });
});
