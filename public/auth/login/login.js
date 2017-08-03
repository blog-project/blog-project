var app = angular.module("myApp.Auth");

app.controller("loginController", ["$scope", "$location", "userService", function ($scope, $location, userService) {

    // $scope.login = function (user) {
    //     userService.login(user).then(function (response) {
    //         $location.path("/home");
    //     }, function (response) {
    //         swal({
    //             title: "Unauthorized!",
    //             text: response.data.message,
    //             type: "error",
    //             confirmButtonText: "Cool"
    //         });
    //     });
    // }

    $scope.test = "Hi there";
}]);
