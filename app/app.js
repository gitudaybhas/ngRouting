(function(){
    var app= angular.module('app',['ngRoute']);

    app.config(['$logProvider', '$routeProvider',function($logProvider, $routeProvider){
        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/',{
                controller: 'appCtrl',
                controllerAs : 'app',
                templateUrl : 'app/views/electronics.html'
            })
            .when('/laptops',{
               controller: 'appCtrl',
                controllerAs : 'app',
                templateUrl: "app/views/laptops.html"
            })
            .when('/games',{
                controller: 'appCtrl',
                controllerAs : 'app',
                templateUrl: "app/views/games.html"
            })
            .when('/cameras',{
                controller: 'appCtrl',
                controllerAs: 'app',
                templateUrl: "app/views/cameras.html"
            })
            .when('/cellphones',{
                controller : 'appCtrl',
                controllerAs :'app',
                templateUrl : 'app/views/cellphones.html'
            })
            .otherwise('/');
    }])
})();