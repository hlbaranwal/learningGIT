angular.module("customer.controller",[]).controller('customerCtrl',function($scope,$http){
    $http.post('https://localhost:8443/ofbizdemo/control/customerService')
         .success(function(response){
            $scope.dataReceived=response.mylist;
          });
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