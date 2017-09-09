angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
   alert("full load")
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{templateUrl:'/app/partials/main.html',controller:'mainCtrl'});
    $routeProvider.when('/a',{templateUrl:'/app/partials/a.html',controller:'mainCtrl'});
});

angular.module('app').controller('mainCtrl', function($scope){
    $scope.myVar = 'Hello Angular';
});