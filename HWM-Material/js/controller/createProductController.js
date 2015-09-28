app.controller('createProductCtrl',function($scope,$http){
	$scope.createProduct=function(){
      	$http.post('https://localhost:8443/ofbizdemo/control/createProductService',{productId:$scope.productId,productName:$scope.productName,price:$scope.price,productCode:$scope.productCode,weight:$scope.weight}).success(function(response){
      	$scope.dataReceived=response;
        });  
    }
    });