'use strict';

describe('Controller: CompanyOverseaOverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var CompanyOverseaOverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyOverseaOverviewCtrl = $controller('CompanyOverseaOverviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyOverseaOverviewCtrl.awesomeThings.length).toBe(3);
  });
});
