(function(){
    angular.module('app').directive('sidebarMenu',function(){
        return{
            restrict : 'E',
            transclude: true,
            templateUrl: 'views/sidebarMenu.html',
            controller: 'appCtrl'
        }
    });
})();