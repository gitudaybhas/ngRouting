(function(){
    angular.module('app')
    .service('dataService',['$q','$timeout',function($q,$timeout) {
        return {
            getProducts: getAllProducts
        }
        function getAllProducts() {
            var productArray = [
                {
                    name: 'red',
                    year: 2006,
                    category: 'electronics'
                }, {
                    name: 'red',
                    year: 3090,
                    category: 'phones'
                },{
                    name: 'red',
                    year: 2006,
                    category: 'games'
                }, {
                    name: 'red',
                    year: 2006,
                    category: 'laptops'
                }, {
                    name: 'red',
                    year: 2006,
                    category: 'laptops'
                }, {
                    name: 'red',
                    year: 2006,
                    category: 'laptops'
                }, {
                    name: 'red',
                    year: 2006,
                    category: 'laptops'
                }, {
                    name: 'red',
                    year: 2005,
                    category: 'cameras'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'cellphones'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'electronics'
                }, {
                    name: 'blue',
                    year: 3090,
                    category: 'phones'
                },{
                    name: 'blue',
                    year: 2006,
                    category: 'games'
                }, {
                    name: 'blue',
                    year: 3090,
                    category: 'cameras'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'cellphones'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'electronics'
                }, {
                    name: 'gold',
                    year: 3090,
                    category: 'phones'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'games'
                }, {
                    name: 'gold',
                    year: 3090,
                    category: 'cameras'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'cellphones'
                },{
                    name: 'green',
                    year: 2006,
                    category: 'electronics'
                }, {
                    name: 'nestle',
                    year: 3090,
                    category: 'phones'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'games'
                }, {
                    name: 'violet',
                    year: 3090,
                    category: 'cameras'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'cellphones'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'electronics'
                }, {
                    name: 'orange',
                    year: 3090,
                    category: 'phones'
                },{
                    name: 'apple',
                    year: 2006,
                    category: 'games'
                }, {
                    name: 'orange',
                    year: 3090,
                    category: 'cameras'
                },{
                    name: 'bagel',
                    year: 2006,
                    category: 'cellphones'
                },
            ];
            var deferred = $q.defer();
            deferred.resolve(productArray);
            return deferred.promise;
        }
    }]);
})();