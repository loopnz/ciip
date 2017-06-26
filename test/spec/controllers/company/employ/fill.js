'use strict';

describe('Controller: CompanyEmployFillCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var CompanyEmployFillCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyEmployFillCtrl = $controller('CompanyEmployFillCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyEmployFillCtrl.awesomeThings.length).toBe(3);
  });
});
