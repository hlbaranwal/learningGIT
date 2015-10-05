angular.module('ecommerceApp.procurement',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('procurement',{
		url : '/procurement',
		templateUrl : 'module/procurement/views/procurement.html'
	});
}]);