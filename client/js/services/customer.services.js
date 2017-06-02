angular
  .module('app')
  .factory('CustomerService',
   ['Customer', '$q', '$rootScope', 'toaster', function(Customer, $q, $rootScope, toaster) {

    function getCustomers() {
      return Customer.find()
      .$promise;
    }

    function updateCustomer(userId, userName) {
      return Customer.prototype$patchAttributes({"id": userId}, {"username": userName})
      .$promise;
    }

    function deleteCustomer(userId) {
      return Customer.deleteById({"id": userId})
      .$promise;
    }

    return {
      getCustomers: getCustomers,
      updateCustomer: updateCustomer,
      deleteCustomer: deleteCustomer
    };

  }]);
