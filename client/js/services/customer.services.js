angular
  .module('app')
  .factory('CustomerService',
   ['Customer', 'Right', 'CustomerRight', '$q', '$rootScope', 'toaster', function(Customer, Right, CustomerRight, $q, $rootScope, toaster) {

    function getCustomers() {
      return Customer.find()
      .$promise;
    }

    function getRights() {
      return Right.find()
      .$promise;
    }

    function insertCustomer(customer) {
      return Customer.create([
        {
          email: customer.email,
          password: customer.password,
          username: customer.username,
        }
      ])
      .$promise;
    }

    function insertCustomerRight(customerId, rightId) {
      return CustomerRight.create([
        {
          principalType: CustomerRight.USER,
          principalId: customerId,
          roleId: rightId,
        }
      ])
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

    function getCustomerRight(userId) {
      return Customer.customerRight({"id": userId})
      .$promise;
    }

    return {
      getCustomers: getCustomers,
      getRights: getRights,
      insertCustomer: insertCustomer,
      insertCustomerRight: insertCustomerRight,
      updateCustomer: updateCustomer,
      deleteCustomer: deleteCustomer,
      getCustomerRight: getCustomerRight
    };

  }]);
