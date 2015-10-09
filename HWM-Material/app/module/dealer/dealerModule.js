angular.module('ecommerceApp.dealer',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('dealer',{
		url : '/dealer',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/dealer/views/dealer.html'
	}).state('alldealers',{
		url : '/dealer/all',
		templateUrl : 'module/dealer/views/dealers.html'
	}).state('createDealer',{
		url : '/dealer/create',
		templateUrl : 'module/dealer/views/createDealer.html'
	}).state('createDealer.company',{
		url : '/company',
		templateUrl : 'module/dealer/views/company.html'
	}).state('createDealer.location',{
		url : '/location',
		templateUrl : 'module/dealer/views/location.html'
	}).state('createDealer.contact',{
		url : '/contact',
		templateUrl : 'module/dealer/views/contact.html'
	});
}]);