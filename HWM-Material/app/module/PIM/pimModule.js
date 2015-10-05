angular.module('ecommerceApp.pim',['ecommerceApp.pim.controllers']).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('pim',{
		url : '/pim',
		templateUrl : 'module/PIM/views/pim.html'
	}).state('createProduct',{
		url : '/product/create',
		templateUrl : 'module/PIM/views/createProduct.html'
	});
}]);