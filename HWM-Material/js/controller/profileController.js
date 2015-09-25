app.controller('profileCtrl',function($scope,$http,$mdDialog){
    $scope.showAdd = function(ev){
    $mdDialog.show({
        controller:DialogController,
        templateUrl: 'partials/customerService/addPhone.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
   };
    
    $scope.showAdditionalInfo = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/additionalInfo.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
    
    $scope.showAddUserLogin = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/addUserLogin.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
    
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}