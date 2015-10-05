angular.module('ecommerceApp.cms',[]).config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('cms',{
		url : '/cms',
		templateUrl : 'module/CMS/views/cms.html'
	});
}]);