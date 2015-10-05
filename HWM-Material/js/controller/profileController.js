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
    
    $scope.showAddMailAddress = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/addMailAddress.html',
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
    
    $scope.showAddQualification = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/addQualification.html',
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
    
    $scope.showAddShippingAddress = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/addShippingAddress.html',
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
    
    $scope.showAddCreditCard = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/addCreditCard.html',
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
    
    $scope.showAddSalesChannel = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/addSalesChannel.html',
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
    
    $scope.showAddClassificationGroup = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/customerService/addClassificationGroup.html',
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