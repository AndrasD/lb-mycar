angular
  .module('app')
  .controller('customerController',
   ['$scope', '$rootScope', 'CustomerService', '$state', 'toaster', function($scope, $rootScope, CustomerService, $state, toaster) {
    $scope.customer = {
            email: $rootScope.currentUser.email,
            name: $rootScope.currentUser.username
    };

    $scope.editCurrentUser() = function() {
        $scope.customer = {
            email: $rootScope.currentUser.email,
            name: $rootScope.currentUser.username
        };
    };


  }]);