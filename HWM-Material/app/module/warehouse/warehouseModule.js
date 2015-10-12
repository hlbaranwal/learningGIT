angular.module('ecommerceApp.warehouse',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.warehouse',{
		url : '/warehouse',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/warehouse/views/warehouse.html'
	});
}]);