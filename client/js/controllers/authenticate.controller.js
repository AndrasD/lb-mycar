angular
  .module('app')
  .controller('AuthLoginController',
  ['$scope', '$rootScope', 'AuthService', '$state', 'toaster', function($scope, $rootScope, AuthService, $state, toaster) {
    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function() {
      if (!$rootScope.currentUser) {    
        AuthService.login($scope.user.email, $scope.user.password)
        .then(function(response) {
          toaster.pop("success", "", "Logged in successfully!", 5000, 'trustedHtml');
          AuthService.role(response.user.id).then(function(resp) {
            AuthService.fillCurrentUser(response.id, response.user, resp);
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
            })
        })
        .catch(function(error) {
          toaster.pop("error", "", "Login failed.", 10000, 'trustedHtml');
        });
      }
    };
  }])

  .controller('AuthLogoutController', 
  ['$scope', '$rootScope', 'AuthService', '$state', function($scope, $rootScope, AuthService, $state) {
    if ($rootScope.currentUser) {
      AuthService.logout()
      .then(function() {
        $state.go('login');
      });
    } else {
      $state.go('login');
    }    
  }]);
