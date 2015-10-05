angular.module('ecommerceApp.ar_ap',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('ar_ap',{
		url : '/ar_ap',
		templateUrl : 'module/AR_AP/views/ar_ap.html'
	});
}]);