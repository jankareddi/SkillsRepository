'use strict';

angular.module('skillsWebApp')
  .factory('$skillService', function ($http, appSettings) {
    
    // Public API here
    return {
      getSkills: function () {
        var url = appSettings.apiUrl + '/skills';
        var promise = $http.get(url);
        return promise;
      }

    };
  });
