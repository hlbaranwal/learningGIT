angular.module('ecommerceApp.financial',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.financial',{
		url : '/financial',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/financial/views/financial.html'
	});
}]);