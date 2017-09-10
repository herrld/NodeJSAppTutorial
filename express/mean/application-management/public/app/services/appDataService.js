(function () {
    
        var injectParams = ["$http"];
        var appManagementService = function ($http) {
            var rootUrl = "api/AppData/";
            var saveUrl = rootUrl + "save";
            var getAllUrl = rootUrl;
            var startUrl = rootUrl;
            this.saveApp = function (app, callback) {
                $http.post(saveUrl, app)
                    .then(function (data) {
                        callback(data);
                    });
    
            }
            this.getAllApps = function (onSuccess) {
                $http.get(getAllUrl).then(onSuccess,function (response){
                    alert("get error");
                });
            }
    
            this.startApp = function (id, onSuccess) {
                $http.post(startUrl, id)
                    .then(onSuccess);
            };
        };
        appManagementService.$inject = injectParams;
        angular.module("app-manager").service("appDataService", appManagementService);
    })();