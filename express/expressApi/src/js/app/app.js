(function () {
    angular.module("app-manager", ["ngRoute"])
        .config(["$routeProvider","$locationProvider",function ($routeProvider, $locationProvider) { 
            $routeProvider.when("/Application/Edit/:Id",
                {
                    controller: "applicationEditController",
                    controllerAs:"vm",
                    templateUrl: "/templates/application/edit.html"
                });
            $routeProvider.when("/",
                {
                    controller: "applicationController",
                    controllerAs: "vm",
                    templateUrl: "/templates/application/index.html"
                });
            
            // $locationProvider.html5Mode(true);
        }]);
})();