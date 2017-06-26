'use strict';

describe('Controller: ProjectProjectoverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var ProjectProjectoverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectProjectoverviewCtrl = $controller('ProjectProjectoverviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectProjectoverviewCtrl.awesomeThings.length).toBe(3);
  });
});
