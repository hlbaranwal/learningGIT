angular.module('ecommerceApp.warehouse',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('warehouse',{
		url : '/warehouse',
		templateUrl : 'module/warehouse/views/warehouse.html'
	});
}]);