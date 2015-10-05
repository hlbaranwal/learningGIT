angular.module('ecommerceApp.report',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('report',{
		url : '/report',
		templateUrl : 'module/report/views/report.html'
	});
}]);