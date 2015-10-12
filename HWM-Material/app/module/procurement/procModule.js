angular.module('ecommerceApp.procurement',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.procurement',{
		url : '/procurement',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/procurement/views/procurement.html'
	});
}]);