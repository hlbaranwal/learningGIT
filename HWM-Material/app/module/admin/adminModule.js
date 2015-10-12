angular.module('ecommerceApp.admin',['admin.controllers','admin.services']).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home',{
		url : '',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/admin/views/home.html'
	});
}]);