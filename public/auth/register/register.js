var app = angular.module("myApp.Auth");

app.controller("registerController", ["$scope", "userService", "$location", "$timeout", function ($scope, userService, $location, $timeout) {

      $scope.signup = function (user) {
          $scope.loading = true;
          
          userService.signup(user).then(function(res){
              if(res.data.success){
                $scope.loading = false;
                $scope.successMessage =  res.data.message + " ...Redirecting";
                  console.log(res.data.message);
                  $timeout(function(){
                      $location.path("/memberlogin")     
                    }, 2000);              
              } else {
                $scope.loading = false;
                $scope.errorMessage = res.data.message;  
              }
          });
          
          $scope.user = {};
      }
}]);
