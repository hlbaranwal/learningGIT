angular.module('ecommerceApp.customer',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('customer',{
		url : '/customer',
		templateUrl : 'module/customer/views/customerPanel.html'
	}).state('all_Customers',{
		url : '/customer/all',
		templateUrl : 'module/customer/views/customer.html'
	}).state('createCustomer',{
		url : '/customer/create',
		templateUrl : 'module/customer/views/createcustomer.html'
	});
}]);