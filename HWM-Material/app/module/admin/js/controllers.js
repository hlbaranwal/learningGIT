angular.module('admin.controllers',[]).controller('LoginController',['$scope','authService','$state',function($scope,authService,$state){

	$scope.buttonText="Login";

	$scope.login = function(){

		$scope.buttonText = "Logging in...";

		authService.login($scope.credentials.username,$scope.credentials.password).then(function(data){
			$state.go('admin.postViewAll');
		},function(err){
			$scope.invalidLogin=true;
		}).finally(function(){
			$scople.buttonText = "Login";
		});
	}
}]);