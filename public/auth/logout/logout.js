
var app = angular.module("myApp.Auth");

app.controller("logoutController", ["userService", function (userService) {  
    userService.logout();
}]);