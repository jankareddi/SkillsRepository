'use strict';

angular.module('skillsWebApp')
  .factory('$userService', function () {

    // Public API here
    return {
      getData: function () {
        return {firstName : 'John', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}, {type: 'SQL server', level: 3}]};
      }
    };
  });
