(function () {
    angular.module("app-manager", ["ngRoute"])
        .config(["$routeProvider","$locationProvider",function ($routeProvider, $locationProvider) { 
            debugger;
            $routeProvider.when("/Application/Edit/:Id",
                {
                    controller: "applicationEditController",
                    controllerAs:"vm",
                    templateUrl: "/templates/application/edit.html"
                });
            $routeProvider.when("/Application",
                {
                    controller: "applicationController",
                    controllerAs: "vm",
                    templateUrl: "/templates/application/index.html"
                });
            
            $locationProvider.html5Mode(true);
        }]);
})();