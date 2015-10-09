var app = angular.module('ecommerceApp', ['ui.router','ecommerApp.controllers','ecommerceApp.services','ecommerceApp.admin','ecommerceApp.dealer','ecommerceApp.customer','ecommerceApp.merchandise','ecommerceApp.pim','ecommerceApp.procurement','ecommerceApp.cms','ecommerceApp.warehouse','ecommerceApp.ar_ap','ecommerceApp.financial','ecommerceApp.report','ngMaterial','ngCookies']);

app.config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('login',{
		url : '/login',
		resolve:{
			user:['authService','$q',function(authService,$q){
				if(authService.user){
					return $q.reject({authorized:true});
				}
			}]
		},
		templateUrl : 'login.html'
	})
}]).run(['$rootScope','$state','$cookieStore','authService',function($rootScope,$state,$cookieStore,authService){
	$state.go("login");
	$rootScope.$on('$stateChangeError', function(event, toState,toParams, fromState, fromParams, error) {
		if(error.unAuthorized) {
			$state.go("login");
		}else if(error.authorized){
			$state.go('dealer');
		}
	});
	authService.user=$cookieStore.get('user');
}]);


