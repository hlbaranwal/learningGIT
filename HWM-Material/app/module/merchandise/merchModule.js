angular.module('ecommerceApp.merchandise',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('merchandise',{
		url : '/merchandise',
		templateUrl : 'module/merchandise/views/merchandise.html'
	});
}]);