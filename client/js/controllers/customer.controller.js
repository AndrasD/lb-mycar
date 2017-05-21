angular
  .module('app')
  .controller('customerController',
   ['$scope', '$rootScope', 'CustomerService', '$state', 'toaster', function($scope, $rootScope, CustomerService, $state, toaster) {
    // default customer is currentUser   
    $scope.customer = {
        email: $rootScope.currentUser.email,
        name: $rootScope.currentUser.username
    };

  }]);