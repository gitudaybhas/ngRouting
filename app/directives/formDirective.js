(function(){
    angular.module('app').directive('formDirective',function(){
        return{
            templateUrl : 'app/views/form.html',
            restrict : 'E',
            scope : true,
            controller : function($scope){
                $scope.submitForm = function(){
                    $scope.sampleArray.push($scope.person);
                    console.log($scope.person)
                }
            }
        }
    });
})();