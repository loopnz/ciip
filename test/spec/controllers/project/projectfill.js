'use strict';

describe('Controller: ProjectProjectfillCtrl', function () {

  // load the controller's module
  beforeEach(module('ciipApp'));

  var ProjectProjectfillCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectProjectfillCtrl = $controller('ProjectProjectfillCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectProjectfillCtrl.awesomeThings.length).toBe(3);
  });
});
