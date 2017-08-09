var app = angular.module("myApp", ["ngRoute", "myApp.Auth", "ngStorage"]);
//

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl:"/components/home/home.html"
        }) 
        .when("/management", {
            templateUrl:"/components/management/management.html",
            isAuthenticated: true,
            permission: ['admin', 'moderator']
        })
        .when("/about", {
            templateUrl: "/components/about/about.html",
            controller: "aboutCtrl"
        })
        .when("/blog", {
            templateUrl: "/components/blog/blog.html",
            controller: "blogCtrl"
        })
        .when("/joinmytribe", {
            templateUrl: "/components/joinmytribe/joinmytribe.html",
            controller: "joinmytribeCtrl"
        })
        .when("/shop", {
            templateUrl: "/components/shop/shop.html",
            controller: "shopCtrl"
        })
        .when("/contact", {
            templateUrl: "/components/contact/contact.html",
            controller: "contactCtrl"
        })
        .when("/user", {
            templateUrl: "components/user/user.html",
            controller: "userController"
        })
        .when("/forgot", {
            templateUrl: "components/auth/forgot/forgot.html",
            controller: "forgotPasswordController"
        })

        .otherwise({
            redirectTo: "/"
        })
}]);
