angular
  .module('app')
  .factory('CustomerService',
   ['Customer', '$q', '$rootScope', 'toaster', function(Customer, $q, $rootScope, toaster) {

    function getCustomers() {
      return Customer.find()
      .$promise;
    }

    function insertCustomer() {
      return Customer
    }

    function updateCustomer(userId, userName) {
      return Customer.prototype$patchAttributes({"id": userId}, {"username": userName})
      .$promise;
    }

    function deleteCustomer(userId) {
      return Customer.deleteById({"id": userId})
      .$promise;
    }

    function getCustomerRight(userId) {
      return Customer.customerRight({"id": userId})
      .$promise;
    }

    return {
      getCustomers: getCustomers,
      updateCustomer: updateCustomer,
      deleteCustomer: deleteCustomer,
      getCustomerRight: getCustomerRight
    };

  }]);
