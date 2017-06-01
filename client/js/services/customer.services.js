angular
  .module('app')
  .factory('CustomerService',
   ['Customer', '$q', '$rootScope', 'toaster', function(Customer, $q, $rootScope, toaster) {

    function updateCustomer(userId, userName) {
      return Customer
      .prototype$patchAttributes({userId}, {username: userName})
      .$promise;
    }

    return {
      updateCustomer: updateCustomer
    };

  }]);
