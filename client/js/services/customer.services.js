angular
  .module('app')
  .factory('CustomerService',
   ['Customer', 'toaster', function(Customer, toaster) {

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
