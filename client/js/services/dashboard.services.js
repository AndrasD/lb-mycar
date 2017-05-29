angular
  .module('app')
  .factory('DashService', 
   ['Customer', 'Simcard', '$q', 'toaster', function(Customer, Simcard, $q, toaster) {

    function allSimcard() {
        return Simcard
        .find()
        .$promise;
    };

    return {
        allSimcard: allSimcard
    };
    
  }]);
