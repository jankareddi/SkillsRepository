'use strict';

angular.module('skillsWebApp')
  .factory('$userService', function ($http, appSettings) {

    // Public API here
    return {
      getData: function (id) {
        var url = appSettings.apiUrl + '/users/' + id;
        var promise = $http.get(url);
        return promise;

        //return {firstName : 'John', lastName: 'Doe', role: 'Developer', skills: [{type: 'ASP.NET', level: 4}, {type: 'SQL server', level: 3}]};
      },

      getBySkill : function(skill) {
        var url = appSettings.apiUrl + '/users?searchBy=skill&p=' + skill;
        var promise = $http.get(url);
        return promise;
      },

      getByName : function(name) {
        var url = appSettings.apiUrl + '/users?searchBy=name&p=' + name;
        var promise = $http.get(url);
        return promise;
      }
    };
  });
