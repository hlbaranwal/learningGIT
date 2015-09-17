/*var app = angular.module('ecommerceApp.appController',[]);
app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope,$mdSidenav){
	 $rootScope.tab='dealer'; 
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);*/

var app = angular.module('ecommerceApp.appController',[]);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope,$mdSidenav){
	 /*$rootScope.tab='dealer'; 
 $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };*/
 
}]);

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

app.controller('customerCtrl',function($scope,$http){
    $http.post('https://localhost:8443/ofbizdemo/control/findAllPerson')
        .success(function(response){
            $scope.dataReceived=response.mylist;
          });
});

/*var customers = [
    {
    name:"mbsdfsjkln",
    phone:"23455678",
    email:"vhadhsj@nfsk"
    },{
    name:"sjdnj",
    phone:"23455678",
    email:"vhadhsj@nfsk"
    },{
    name:"ndcjnsk",
    phone:"23455678",
    email:"vhadhsj@nfsk"
    },];*/




