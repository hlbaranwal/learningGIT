app.controller('createProductCtrl',function($scope,$http){
	$scope.createProduct=function(){
<<<<<<< HEAD
      	$http.post('https://localhost:8443/ofbizdemo/control/createProductService',{productId:$scope.productId,productName:$scope.productName,price:$scope.price,productCode:$scope.productCode,weight:$scope.weight}).success(function(response){
      	$scope.dataReceived=response;
        });  
=======
        
>>>>>>> 9265eafefa8b90a4c44df3454eba0a9634d24792
    }
    });