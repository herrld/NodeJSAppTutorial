angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    debugger;
    // $locationProvider.html5Mode({enabled:true, requireBase:false});
    $routeProvider.when('/',{templateUrl:'/app/partials/main.html',controller:'mainCtrl'});
    $routeProvider.when('/a',{templateUrl:'/app/partials/a.html',controller:'mainCtrl'});
});

angular.module('app').controller('mainCtrl', function($scope){
    $scope.myVar = 'Hello Angular';
    alert("hello");
});