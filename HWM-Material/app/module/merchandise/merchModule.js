angular.module('ecommerceApp.merchandise',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('merchandise',{
		url : '/merchandise',
		templateUrl : 'module/merchandise/views/merchandise.html'
	}).state('createPromotion',{
		url : '/createPromotion',
		templateUrl : 'module/merchandise/views/panel/createPromotion.html'
	}).state('createPromotion.main',{
		url : '/createPromotion/main',
		templateUrl : 'module/merchandise/views/panel/createpromotion/main.html'
	}).state('createPromotion.product',{
		url : '/createPromotion/product',
		templateUrl : 'module/merchandise/views/panel/createpromotion/applyOnProduct.html'
	}).state('createPromotion.order',{
		url : '/createPromotion/order',
		templateUrl : 'module/merchandise/views/panel/createpromotion/applyOnOrder.html'
	});
}]);