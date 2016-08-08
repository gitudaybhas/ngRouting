(function(){
    angular.module('app').directive('productsView',[productsView]);

    function productsView(){
        return{
            restrict:'E',
            templateUrl: 'views/products.html',
            scope: true
        }
    }
})();