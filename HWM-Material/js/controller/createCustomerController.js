app.controller('createCustomerCtrl',function($scope,$http){
	$scope.submitForm=function(isValid){
        if(isValid){
            $http.post('https://localhost:8443/ofbizdemo/control/createCustomer',{firstName:$scope.firstName,                                          lastName:$scope.lastName,emailAddress:$scope.emailId}).success(function(response){
            $scope.dataReceived=response;
            });
        }
        else{
            alert("Please Feed correct Information or check highlighted blocks!");
        }
    };
});



