'use strict';

angular.module('seedlyApp')
  .directive('fileModel', function ($parse, imgutil) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);

        element.change(function(){
          var file = element[0].files[0];

          imgutil.loadImage(file).then(function(img) {
            if(imgutil.lessThanMaxFrameSize(img) && imgutil.lessThanMaxFileSize(file)) {
              file.src = img.src;

              model.assign(scope, file);
            } else {
              // TOOD: how to propagate the error
              console.log('img is too large');
            }
          });
        });
      }
    };
  });