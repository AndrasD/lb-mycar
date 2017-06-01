angular
  .module('app')
  .controller('customerController',
   ['$scope', '$rootScope', 'CustomerService', '$state', function($scope, $rootScope, CustomerService, $state) {
    // default customer is currentUser   
    $scope.customer = {
        email: $rootScope.currentUser.email,
        name: $rootScope.currentUser.username
    };

    $scope.customerUpdate = function() {
      CustomerService.updateCustomer($rootScope.currentUser.id, $scope.customer.name);
      $rootScope.currentUser.username = $scope.customer.name;
    };

  }]);