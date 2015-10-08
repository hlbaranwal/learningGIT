angular.module('admin.services',[]).factory('authService',['AUTH_ENDPOINT','LOGOUT_ENDPOINT','$http','$cookieStore', function(AUTH_ENDPOINT,LOGOUT_ENDPOINT,$http,$cookieStore){

	var auth = {};

	auth.login = function(username,password){
		return $http.post(AUTH_ENDPOINT,{username:username,password:password}).then(function(response,status){
			auth.user=response.data;
			$cookieStore.put('user',auth.user);
			return auth.user;
		});
	}

	auth.logout = function(){
		return $http.post(LOGOUT_ENDPOINT).then(function(response){
			auth.user=undefined;
			$cookieStore.remove('user');
		});
	}

	return auth;

}]).value('AUTH_ENDPOINT','https://localhost:8443/expensemanager/control/login')
   .value('LOGOUT_ENDPOINT','https://localhost:8443/expensemanager/control/login');