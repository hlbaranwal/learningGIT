angular.module('profile.controller',[]).controller('profileCtrl',function($scope,$http,$mdDialog){
    $scope.showAdd = function(ev){
    $mdDialog.show({
        controller:DialogController,
        templateUrl: 'module/customer/views/profile/addPhone.html',
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
      templateUrl: 'module/customer/views/profile/additionalInfo.html',
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
      templateUrl: 'module/customer/views/profile/addMailAddress.html',
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
      templateUrl: 'module/customer/views/profile/addUserLogin.html',
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
      templateUrl: 'module/customer/views/profile/addQualification.html',
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
      templateUrl: 'module/customer/views/profile/addShippingAddress.html',
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
      templateUrl: 'module/customer/views/profile/addCreditCard.html',
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
      templateUrl: 'module/customer/views/profile/addSalesChannel.html',
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
      templateUrl: 'module/customer/views/profile/addClassificationGroup.html',
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