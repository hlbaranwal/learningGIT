angular.module('ecommerceApp.report',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.report',{
		url : '/report',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/report/views/report.html'
	});
}]);