angular.module('ecommerceApp.customer',['customer.controller','profile.controller']).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.customer',{
		url : '/customer',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/customerPanel.html'
	}).state('home.all_Customers',{
		url : '/customer/all',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/customer.html'
	}).state('home.createCustomer',{
		url : '/customer/create',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/createcustomer.html'
	}).state('home.calender',{
		url : '/calender/create',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/calender.html'
	}).state('home.viewCustomer',{
		url : '/customer/profile',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/customer/views/profile.html'
	});
}]);