angular.module('ecommerceApp.pim',['ecommerceApp.pim.controllers']).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('home.pim',{
		url : '/pim',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/PIM/views/pim.html'
	}).state('home.createProduct',{
		url : '/product/create',
		resolve:{
			user:['authService','$q',function(authService,$q){
				return authService.user || $q.reject({unAuthorized:true});
			}]
		},
		templateUrl : 'module/PIM/views/createProduct.html'
	});
}]);