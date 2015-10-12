angular.module('ecommerceApp.merchandise',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.merchandise',{
		url : '/merchandise',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/merchandise/views/merchandise.html'
	}).state('home.createPromotion',{
		url : '/',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/merchandise/views/panel/createPromotion.html'
	}).state('home.createPromotion.main',{
		url : 'createPromotion/main',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/merchandise/views/panel/createpromotion/main.html'
	}).state('home.createPromotion.product',{
		url : 'createPromotion/product',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/merchandise/views/panel/createpromotion/applyOnProduct.html'
	}).state('home.createPromotion.order',{
		url : 'createPromotion/order',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/merchandise/views/panel/createpromotion/applyOnOrder.html'
	});
}]);