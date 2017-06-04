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

    CustomerService.getCustomers()
    .then( function(response) {
      angular.forEach(response, function(value, key) {
        value.description = "";
        $scope.customersCollection.push(value);
      });
    });
    
    $scope.customerUpdate = function(customer) {
      CustomerService.updateCustomer($rootScope.currentUser.id, $scope.currentCustomer.name)
      .then( function(response) {
        $rootScope.currentUser.username = $scope.currentCustomer.name;
        $state.go($rootScope.fromPage);
      });
    };

    $scope.deleteCustomer = function(customer) {
      CustomerService.deleteCustomer(customer)
      .then( function(response) {
        toaster.pop("success", "", "Customer deleted successfully", 10000, 'trustedHtml');
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
            .then( function(response) {
              toaster.pop("success", "", "Customer updated successfully", 10000, 'trustedHtml');
            });
        } else {
            customer.editMode = false;
            $scope.disableButton = false;
        }
    }

    $scope.cancel = function(customer) {
//        getCustomers();
        customer.editMode = false;
        $scope.disableButton = false;
    }

  }]);