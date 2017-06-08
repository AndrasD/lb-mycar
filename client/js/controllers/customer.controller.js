angular
  .module('app')
  .controller('customerController',
   ['$scope', '$rootScope', 'CustomerService', '$state', 'toaster', function($scope, $rootScope, CustomerService, $state, toaster) {
    // default customer is currentUser   
    $scope.currentCustomer = {
        email: $rootScope.currentUser.email,
        name: $rootScope.currentUser.username
    };
    var defaultSort = 'name';
    $scope.disableButton = false;
    $scope.customersCollection = [];
    $scope.sortType     = defaultSort;  // set the default sort type
    $scope.sortReverse  = false;        // set the default sort reverse
    $scope.searchCustomers  = '';       // set the default search/filter term

    $scope.rights = [];

    CustomerService.getCustomers()
    .then( function(response) {
      angular.forEach(response, function(value, key) {
        value.rightId = "";
        value.description = "";
        CustomerService.getCustomerRight(value.id)
        .then(function(resp) {
          value.rightId = resp[0].id;
          value.description = resp[0].description;
        });
        $scope.customersCollection.push(value);
      });
    });

    CustomerService.getRights()
    .then(function(response) {
      angular.forEach(response, function(value, key) {
        $scope.rights.push(value);
      });
    });
    
    $scope.customerUpdate = function(customer) {
      CustomerService.updateCustomer($rootScope.currentUser.id, $scope.currentCustomer.name)
      .then(function(response) {
        $rootScope.currentUser.username = $scope.currentCustomer.name;
        $state.go($rootScope.fromPage);
      });
    };

    $scope.deleteCustomer = function(customer) {
      CustomerService.deleteCustomer(customer)
      .then(function(response) {
        toaster.pop("success", "", "Customer deleted successfully", 3000, 'trustedHtml');
      });
    };

    $scope.editCustomer = function(customer) {
        customer.editMode = true;
        $scope.disableButton = true;
        $scope.sort = undefined;
    }

    //save customer (create & update)
    $scope.saveCustomer = function(customer) {
        if (customer.editMode) {
            customer.editMode = false;
            $scope.disableButton = false;     
            CustomerService.updateCustomer(customer.id, customer.username)
            .then(function(response) {
              toaster.pop("success", "", "Customer updated successfully", 3000, 'trustedHtml');
            });
        } else {
            customer.editMode = false;
            $scope.disableButton = false;
            CustomerService.insertCustomer(customer)
            .then(function(response) {
              toaster.pop("success", "", "Customer inserted successfully", 3000, 'trustedHtml');
            })
            .catch(function(error) {
              toaster.pop("error", "", error.data.error.details[0].message, 10000, 'trustedHtml');              
            });
        }
    }

    $scope.cancel = function(customer) {
//        getCustomers();
        customer.editMode = false;
        $scope.disableButton = false;
    }

  }]);