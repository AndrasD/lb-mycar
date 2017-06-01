angular
  .module('app')
  .factory('DashService', 
   ['Customer', 'Simcard', 'Coordinate', '$q', function(Customer, Simcard, Coordinate, $q) {

    function allSimcard() {
        return Simcard.find()
        .$promise;
    };

    function userSimcard(userId) {
        return Customer.simcards({"id": userId})
        .$promise;
    };

    function addCoordinate(simcardId, coordinate) {
        return Coordinate.create({simcardId: simcardId, point: coordinate})
        .$promise;
    };

    function getCoordinate(simcardId) {
        return Simcard.coordinates({"id": simcardId})
        .$promise;
    };

    return {
        allSimcard: allSimcard,
        userSimcard: userSimcard,
        addCoordinate: addCoordinate,
        getCoordinate: getCoordinate
    };
    
  }]);
