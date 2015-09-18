app.controller('createCustomerCtrl',function($scope,$http){
	$scope.createPerson=function(){
        $http.post('https://localhost:8443/partymgr/control/createPerson',{firstName:$scope.firstName,lastName:$scope.lastName,emailId:$scope.emailId}).success(function(response){
        $scope.dataReceived=response;
        });
    }
    $scope.myf=function(){
        alert("Customer is created!");
    }
});