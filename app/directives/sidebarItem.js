(function(){
    angular.module('app').directive('sidebarItem',function(){
        return{
            require: '^sidebarMenu',
            scope : {
                label:'@',
                category:"@"
            },
            templateUrl: 'views/sidebarItem.html',
            link: function(scope,el,attr,ctrl){
                el.on('click',function(evt){
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function(){
                        ctrl.filterProducts(scope.label);
                    })
                });
            }

        }
    });
})();