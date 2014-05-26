'use strict';

angular.module('skillsWebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
