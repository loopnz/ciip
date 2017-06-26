'use strict';

describe('Controller: CompanyEmployEmployCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var CompanyEmployEmployCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyEmployEmployCtrl = $controller('CompanyEmployEmployCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyEmployEmployCtrl.awesomeThings.length).toBe(3);
  });
});
