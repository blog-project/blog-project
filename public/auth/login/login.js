var app = angular.module("myApp.Auth");

app.controller("loginController", ["$scope", "$location", "userService", function ($scope, $location, userService) {

     $scope.logUser = function (user) {
         userService.login(user).then(function (res) {
             $location.path("/user");
         }, function (response) {
//             swal({
//                 title: "Unauthorized!",
//                 text: response.data.message,
//                 type: "error",
//                 confirmButtonText: "Cool"
//             });
         });
         $scope.user = {};
     }
        
}]);
