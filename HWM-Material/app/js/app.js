var app = angular.module('ecommerceApp', ['ui.router','ecommerceApp.admin','ecommerceApp.dealer','ecommerceApp.customer','ecommerceApp.merchandise','ecommerceApp.pim','ecommerceApp.procurement','ecommerceApp.cms','ecommerceApp.warehouse','ecommerceApp.ar_ap','ecommerceApp.financial','ecommerceApp.report','ngMaterial']);

app.run(['$state',function($state) 
	{ $state.go('dealer'); }
	]);	

