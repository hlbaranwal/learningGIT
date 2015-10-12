angular.module('ecommerceApp.dealer',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.dealer',{
		url : '/dealer',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/dealer/views/dealer.html'
	}).state('home.alldealers',{
		url : '/dealer/all',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/dealer/views/dealers.html'
	}).state('home.createDealer',{
		url : '/dealer/create',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/dealer/views/createDealer.html'
	}).state('home.createDealer.company',{
		url : '/company',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/dealer/views/company.html'
	}).state('home.createDealer.location',{
		url : '/location',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/dealer/views/location.html'
	}).state('home.createDealer.contact',{
		url : '/contact',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/dealer/views/contact.html'
	});
}]);