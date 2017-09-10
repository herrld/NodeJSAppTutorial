///// <reference path
var injectParams = ["$scope","$http"]


var redditController = function($scope, $http){
    var successHandler = function(res){
       $scope.data = res.data.data.children;
    };
    var errorHandler = function(res){
        var a = res;
    };
    $http.get("/api")
    .then(successHandler,
    errorHandler);
};

redditController.$inject = injectParams;

angular.module("homePage").controller("redditCtrl", redditController);