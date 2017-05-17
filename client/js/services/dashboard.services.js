angular
  .module('app')
  .factory('DashService', 
  ['Customer', '$q', '$scope', '$rootScope', '$state', 'toaster', function(Customer, $q, $scope, $rootScope, $state, toaster) {

    function simcard() {
        $scope.comboNames = ["Emil", "Tobias", "Linus"];
    }

    return {
        simcard: simcard
    };

  }]);
