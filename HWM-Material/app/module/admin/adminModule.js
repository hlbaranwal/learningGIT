angular.module('ecommerceApp.admin',['admin.controllers','admin.services'])/*.config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('login',{
		url : 'login',
		resolve:{
			user:['authService','$q',function(authService,$q){
				if(authService.user){
					return $q.reject({authorized:true});
				}
			}]
		},
		templateUrl : 'module/admin/views/login.html'
	})
}]).run(['$rootScope','$state','$cookieStore','authService',function($rootScope,$state,$cookieStore,authService){
	$rootScope.$on('$stateChangeError', function(event, toState,toParams, fromState, fromParams, error) {
		if(error.unAuthorized) {
			$state.go("dealer");
		}else if(error.authorized){
			$state.go('dealer');
		}
	});
	authService.user=$cookieStore.get('user');
}])*/;