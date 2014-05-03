'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('skillsWebApp'));

  var UserCtrl,
    scope,
    userService;

  beforeEach(function() {
    userService = {
      getData: function() {
        return {firstName : 'Jane', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}]};
      }

    };

  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserCtrl = $controller('UserCtrl', {
      $scope: scope,
      $userService: userService
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should get user data', function () {
    scope.getUserData();
    expect(scope.userData.firstName).toBe('Jane');
    expect(scope.userData.skills.length).toBe(1);
  });

});
