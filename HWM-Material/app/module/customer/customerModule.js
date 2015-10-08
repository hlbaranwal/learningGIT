angular.module('ecommerceApp.customer',['customer.controller','profile.controller']).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('customer',{
		url : '/customer',
		templateUrl : 'module/customer/views/customerPanel.html'
	}).state('all_Customers',{
		url : '/customer/all',
		templateUrl : 'module/customer/views/customer.html'
	}).state('createCustomer',{
		url : '/customer/create',
		templateUrl : 'module/customer/views/createcustomer.html'
	}).state('calender',{
		url : '/calender/create',
		templateUrl : 'module/customer/views/calender.html'
	}).state('viewCustomer',{
		url : '/customer/profile',
		templateUrl : 'module/customer/views/profile.html'
	});
}]);