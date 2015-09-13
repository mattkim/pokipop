'use strict';

angular.module('seedlyApp')
  .controller('SubscriptionsCtrl', function ($scope, $modal, Modal) {
    $scope.message = 'Hello';
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.animationsEnabled = true;

    $scope.open_two = function() {
      //var blah = Modal.confirm.delete();
      //console.log(blah);
      //blah();
    	Modal.confirm.delete(function(args){
        console.log('delete modal open?');
        console.log(event);
        console.log(args);
      })('blahblahblah');
    };

    $scope.open = function() {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/subscriptions/myModalContent.html',
        controller: 'ModalInstanceCtrl',
        //size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };
 });

angular.module('seedlyApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});