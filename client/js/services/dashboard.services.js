angular
  .module('app')
  .factory('DashService', 
   ['Customer', '$q', '$scope', '$rootScope', '$state', 'toaster', function(Customer, $q, $scope, $rootScope, $state, toaster) {

    var factory = {};

    factory.simcard = function() {
        return comboNames = ["Emil", "Tobias", "Linus"];
    };

    return factory;

  }]);
