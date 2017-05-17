angular
  .module('app')
  .controller('AuthLoginController', ['$scope', 'AuthService', '$state', function($scope, AuthService, $state) {
    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function() {
      AuthService.login($scope.user.email, $scope.user.password)
        .then(function() {

          // return to saved returnTo state before redirection to login
          if ($scope.returnTo && $scope.returnTo.state) {
            $state.go(
              $scope.returnTo.state.name,
              $scope.returnTo.params
            );
            // maintain the inherited rootscope variable returnTo
            // but make the returnTo state of it null,
            // so it can be used again after a new login.
            $scope.returnTo.state  = null;
            $scope.returnTo.params = null;
            return;
          }
          // or go to the default state after login
          $scope.user = null;
          $state.go('dashboard');
        });
    };
  }])

  .controller('AuthLogoutController', ['$scope', '$rootScope', 'AuthService', '$state', function($scope, $rootScope, AuthService, $state) {
    if ($rootScope.currentUser != null) {
      AuthService.logout()
        .then(function() {
          $state.go('login');
        });
    } else {
      $state.go('login');
    }    

  }]);
