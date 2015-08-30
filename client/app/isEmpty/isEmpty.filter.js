'use strict';

function isEmpty(input) {
  if(input === null ||
    input === undefined ||
    input.length === 0) {
    return true;
  }

  for (var key in input) {
    if (input.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;    
}

angular.module('seedlyApp')
  .filter('isEmpty', function () {
    return function (input) {
      return isEmpty(input);
    };
  })
  .filter('isNotEmpty', function() {
    return function(input) {
      return !isEmpty(input);
    };
  });
