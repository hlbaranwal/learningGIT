app.controller('createCustomerCtrl',function($scope,$http){
	$scope.createCustomer=function(){
        $http.post('https://localhost:8443/ofbizdemo/control/createCustomer',{firstName:$scope.firstName,lastName:$scope.lastName,emailAddress:$scope.emailId}).success(function(response){
        $scope.dataReceived=response;
        });
    }
    /*$scope.myf=function(){
        alert("Customer is created!");
    }*/
});