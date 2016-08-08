(function(){
    angular.module('app')
        .controller('appCtrl',['$scope','dataService',appCtrl]);
        function appCtrl($scope,dataService){
            dataService.getProducts().then(getProductsSuccess, getProductsError);

            function getProductsSuccess(products){
                $scope.productList = products;
            }
            function getProductsError(error){
                console.log(error);
            }
            $scope.filtered= false;
            $scope.filterParameter = 'electronics';
            this.filterProducts = function(label){
                $scope.filterParameter = label;
                $scope.filtered=true;
            }
        }
})();