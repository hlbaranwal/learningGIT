var app = angular.module('ecommerceApp', ['ecommerceApp.appController', 'ngMaterial', 'ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.when('/panel', {
		templateUrl: 'partials/panel/dealer.html'
	})
	   $routeProvider.when('/dealers', {
            templateUrl: 'partials/dealer/dealers.html'
	   })
	   $routeProvider.when('/createdealer', {
		  templateUrl: 'partials/dealer/createDealer.html'
	   })
    $routeProvider.when('/customerservice', {
        templateUrl: 'partials/panel/customerservice.html'
    })
	   $routeProvider.when('/customer', {
		  templateUrl: 'partials/customerService/customer.html'
	   })
	   $routeProvider.when('/createCustomer', {
            templateUrl: 'partials/customerService/createcustomer.html'
	   })
        $routeProvider.when('/calender', {
		  templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/parties', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/event', {
		  templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/order', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/createOrder', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/returns', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/createReturns', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/quotes', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/createQuote', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/importParty', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/exportPartyProfile', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/merchandise', {
		templateUrl: 'partials/panel/merchandise.html'
	})
        $routeProvider.when('/promotion', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/createPromotion', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/sale', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/createSale', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/featureBuilder', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/features', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/pim', {
		templateUrl: 'partials/panel/pim.html'
	})
	   $routeProvider.when('/product', {
            templateUrl: 'partials/pim/products.html'
	   })
        $routeProvider.when('/createProduct', {
            templateUrl: 'partials/pim/createProduct.html'
	   })
	   $routeProvider.when('/categoryBuilder', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/categories', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/createCategory', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/importCategories', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/exportCategories', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/exportStandardProduct', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/importCtegoryContents', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/exportProductTextContents', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/importProductTextContents', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/importContentMetaData', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/reviews', {
            templateUrl: 'partials/notavailable.html'
	   })
	   $routeProvider.when('/bulkSupplierUpload', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/procurement', {
		templateUrl: 'partials/panel/procurement.html'
	})
        $routeProvider.when('/supplier', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/createSupplier', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/purchaseOrders', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/createPurchaseOrder', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/requirements', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/cms', {
		templateUrl: 'partials/panel/cms.html'
	})
        $routeProvider.when('/webpages', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/ema', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/templates', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/warehouse', {
		templateUrl: 'partials/panel/warehouse.html'
	})
        $routeProvider.when('/picklist', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/createPicklist', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/receiving', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/shipments', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/createShipments', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/inventoryCount', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/moveStock', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/arap', {
		templateUrl: 'partials/panel/arap.html'
	})
        $routeProvider.when('/payment', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/createPayment', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/invoice', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/accountingTransactions', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/accountingTransactionEntries', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/financialreport', {
		templateUrl: 'partials/panel/financialreport.html'
	})
        $routeProvider.when('/incomeStatement', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/trialBalance', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/grossMargin', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/inventoryValuation', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/admin', {
		templateUrl: 'partials/panel/admin.html'
	})
        $routeProvider.when('/user', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/createUser', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/storeSetup', {
            templateUrl: 'partials/notavailable.html'
	   })
    $routeProvider.when('/report', {
		templateUrl: 'partials/panel/report.html'
	})
        $routeProvider.when('/businessOverview', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/supplierProduct', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/salesAnalytics', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/lifetimeValue', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/productPerformanceOverview', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/serviceLevel', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/marketBasketAnalysis', {
            templateUrl: 'partials/notavailable.html'
	   })
        $routeProvider.when('/poPipeline', {
            templateUrl: 'partials/notavailable.html'
	   })
	.otherwise({
		redirectTo: '/panel'
	});
}); 
