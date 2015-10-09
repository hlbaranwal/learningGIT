angular.module('admin.controllers',[])/*.controller('AdminController',['$scope','authService','$state','user',function($scope,authService,$state,user){
	$scope.logout=function(){
		authService.logout().then(function(){
			$state.go('login');
		});
	}
}]).controller('LoginController',['$scope','authService','$state',function($scope,authService,$state){

	$scope.buttonText="Login";

	$scope.login = function(){

		$scope.buttonText = "Logging in...";
  
		authService.login($scope.credentials.username,$scope.credentials.password).then(function(data){
			$state.go('dealer');
		},function(err){
			$scope.invalidLogin=true;
		}).finally(function(){
			$scople.buttonText = "Login";
		});
	}
}])*/;