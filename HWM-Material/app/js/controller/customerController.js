app.controller('customerCtrl',function($scope,$http){
    $http.post('https://localhost:8443/ofbizdemo/control/customerService')
        .success(function(response){
            $scope.dataReceived=response.mylist;
          });
});