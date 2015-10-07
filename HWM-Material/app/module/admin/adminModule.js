angular.module('ecommerceApp.admin',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('login',{
		url : 'login',
		templateUrl : 'module/admin/views/login.html'
	})
}]);