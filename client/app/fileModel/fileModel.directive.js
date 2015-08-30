'use strict';

angular.module('seedlyApp')
  .directive('fileModel', function ($parse, imgutil) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        //var model = $parse(attrs.fileModel);
        console.log(attrs);

        element.change(function(){
          var file = element[0].files[0];

          scope.profilePictureFile = file;

          imgutil.loadImage(file).then(function(img) {
            scope.user.profilePictureURL = img.src;
            scope.profilePictureLoaded = true;
            scope.profilePicture = img;

            // TODO: I want to update this canvas correctly
            // Should maybe just update the dom directly here
            // var canvas = document.getElementById('canvas');
            // var ctx = canvas.getContext('2d');
            // var width = 200;
            // var height = 200;
            // canvas.width = width;
            // canvas.height = height;
            // ctx.drawImage(img, 0, 0, width, height);

            // On update
            // 1. canvas img
            // 2. name
            // 3. email
            // 4. password
          });
        });
      }
    };
  });