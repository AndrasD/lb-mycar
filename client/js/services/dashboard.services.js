angular
  .module('app')
  .factory('DashService',
   ['Customer', 'toaster', function(Customer, toaster) {

    function simcard() {
        return [{name: "Emil"}, {name: "Tobias"}, {name: "Linus"}];
    }

    return {
        simcard: simcard
    };

  }]);
