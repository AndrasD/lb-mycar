angular
  .module('app')
  .factory('CustomerService',
   ['Customer', '$q', '$rootScope', '$state', 'toaster', function(Customer, $q, $rootScope, $state, toaster) {

    function getCurrentCustomer() {
        var customer = {
            email: $rootScope.currentUser.email,
            name: $rootScope.currentUser.username
        } 
        return customer;
    }

    return {
      getCurrentCustomer: getCurrentCustomer
    };

  }]);
