'use strict';

describe('Controller: CompanyOrganOrganCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var CompanyOrganOrganCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyOrganOrganCtrl = $controller('CompanyOrganOrganCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyOrganOrganCtrl.awesomeThings.length).toBe(3);
  });
});
