var app = angular.module("myApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/memberlogin", {
            templateUrl: "auth/login/login.html",
            controller: "loginController"
        })
        // .when("/logout", {
        //     controller: "logoutController",
        //     template: ""
        // })
        // .when("/reset/:resetToken", {
        //     templateUrl: "components/auth/reset/reset.html",
        //     controller: "passwordResetController"
        // })
        // .when("/forgot", {
        //     templateUrl: "auth/forgot/forgot.html",
        //     controller: "forgotPasswordController"
        // })
}]);

// app.config(["$httpProvider", function ($httpProvider) {
//     $httpProvider.interceptors.push("authInterceptor");
// }]);
