angular.module("customer.controller",[]).controller('customerCtrl',function($scope,$http){
    $http.post('https://localhost:8443/ofbizdemo/control/customerService')
         .success(function(response){
            $scope.dataReceived=response.mylist;
          });
}).controller('profileCtrl',function($scope,$http,$mdDialog){
    $scope.showAdd = function(ev){
    $mdDialog.show({
        controller:DialogController,
        templateUrl: 'module/customer/views/addPhone.html',
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
      templateUrl: 'module/customer/views/additionalInfo.html',
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
      templateUrl: 'module/customer/views/addMailAddress.html',
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
      templateUrl: 'module/customer/views/addUserLogin.html',
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
      templateUrl: 'module/customer/views/addQualification.html',
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
      templateUrl: 'module/customer/views/addShippingAddress.html',
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
      templateUrl: 'module/customer/views/addCreditCard.html',
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
      templateUrl: 'module/customer/views/addSalesChannel.html',
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
      templateUrl: 'module/customer/views/addClassificationGroup.html',
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
    
}).controller('createCustomerCtrl',function($scope,$http){
  $scope.createCustomer=function(){
        $http.post('https://localhost:8443/ofbizdemo/control/createCustomer',{firstName:$scope.firstName,lastName:$scope.lastName,emailAddress:$scope.emailId}).success(function(response){
        $scope.dataReceived=response;
        });
    }
    $scope.myf=function(){
        alert("Customer is created!");
    }
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