angular.module('ecommerceApp.ar_ap',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('ar_ap',{
		url : '/ar_ap',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/AR_AP/views/ar_ap.html'
	});
}]);