'use strict';

angular.module('mean.demo')
  .directive('myDirective', function() {
    return {
              restrict: 'EA',
              replace: false,
              scope: {
                myUrl: '@',
                myLinkText: '@'
              },
              template: '<a href="{{ myUrl }}"> {{ myLinkText }}</a>'
    };
  });