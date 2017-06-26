'use strict';

describe('Controller: CompanyOrganOverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var CompanyOrganOverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyOrganOverviewCtrl = $controller('CompanyOrganOverviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyOrganOverviewCtrl.awesomeThings.length).toBe(3);
  });
});
