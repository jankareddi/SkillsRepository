'use strict';

angular.module('skillsWebApp')
  .directive('ngEnter', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ngEnter directive');
      }
    };
  });
