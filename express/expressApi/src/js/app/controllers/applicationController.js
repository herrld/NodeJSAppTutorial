(function () {
    var injectParams = ["$http", "appDataService"];
    
    var applicationController = function($http, appDataService) {
        var vm = this;
        vm.applications;
        appDataService.getAllApps(function (response) {
            debugger;
            vm.applications = response.data;
        })
       
        vm.start = function (id) {
            appDataService.startApp(id, function (response) {
                alert("success")
            })
        };

        vm.create = function () {
            appDataService.saveApp({}, function () {
                alert("completed");
            });
        }
    }

    applicationController.$inject = injectParams;

    angular.module("app-manager").controller("applicationController", applicationController);
})();