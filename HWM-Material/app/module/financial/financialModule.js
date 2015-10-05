angular.module('ecommerceApp.financial',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('financial',{
		url : '/financial',
		templateUrl : 'module/financial/views/financial.html'
	});
}]);