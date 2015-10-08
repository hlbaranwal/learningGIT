angular.module('ecommerceApp.customer',['customer.controller']).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('customer',{
		url : '/customer',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/customerPanel.html'
	}).state('all_Customers',{
		url : '/customer/all',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/customer.html'
	}).state('createCustomer',{
		url : '/customer/create',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/createcustomer.html'
	}).state('viewCustomer',{
		url : '/customer/profile',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/profile.html'
	});
}]);