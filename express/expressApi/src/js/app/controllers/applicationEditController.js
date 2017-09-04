(function () {
    var injectParams = ["$location", "$scope", "$http", "$routeParams", "appDataService"];
    
    var applicationEditController = function($location, $scope, $http, $routeParams, appDataService) {
        var vm = this;
        vm.Id = $routeParams.Id;
        vm.icons = [{ source: "images/ok-icon.png" }, { source: "images/ok-icon.png" }];
        debugger;
        $http.get("api/AppData/" + vm.Id)
            .then(function (response) {
                vm.data = response.data;
                vm.name = response.data.name;
                //vm.data.parameters = response.data.parameters;
            });

        vm.addParam = function () {
            if (!vm.data.parameters)
            {
                vm.data.parameters = [];
            }
            vm.data.parameters.push({ order: vm.data.parameters.length });
        };

        vm.save = function () {
            appDataService.saveApp(vm.data, function () {
                $location.path("/Application");
            });
        };

        vm.start = function () {
            appDataService.startById(vm.Id);
        };

        vm.removeParam = function (param) {
            var index = vm.data.parameters.indexOf(param);
            vm.data.parameters.splice(index, 1);
        };

    }

    applicationEditController.$inject = injectParams;
    angular.module("app-manager").controller("applicationEditController", applicationEditController);

})();