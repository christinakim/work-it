var outfitControllers = angular.module('outfitControllers', []);


app.controller("outfitCtrl", function($scope) {
    $scope.message = "";
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Outfit Saved");};
});