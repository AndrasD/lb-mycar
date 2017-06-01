angular
  .module('app')
  .controller('dashboardController', 
   ['$scope', '$rootScope', 'DashService', '$state', 'toaster', function ($scope, $rootScope, DashService, $state, toaster) {
    //initially set those objects to null to avoid undefined error
    $scope.selected = "";
    $scope.simCards = [];
    
    if ($rootScope.currentUser.role == 'admin') {
      DashService.allSimcard()
      .then( function(response) {
        $scope.simCards = fillSimCards(response);
      });
    } else {
      DashService.userSimcard($rootScope.currentUser.id)
      .then( function(response) {
        $scope.simCards = fillSimCards(response);
      })
      .catch(function(error) {
        toaster.pop("error", "", "User hasn't simcard.", 10000, 'trustedHtml');
      });
    }

    $scope.createCoordinate = function() {
      DashService.addCoordinate(1,'47.439578, 18.924680');
      DashService.addCoordinate(1,'47.439704, 18.924839');
      DashService.addCoordinate(1,'47.440252, 18.925590');
      DashService.addCoordinate(2,'47.439458, 18.923046');
      DashService.addCoordinate(2,'47.439859, 18.922432');
      DashService.addCoordinate(2,'47.439748, 18.921947');
    };

    $scope.simcardCoordinate = function() {   
      DashService.getCoordinate($scope.selected.id)
      .then( function(response) {
        var markers = [];
        angular.forEach(response, function(value, key) {
          markers.push(value);
        });
        $scope.markers = markers;
      })      
      .catch(function(error) {
        toaster.pop("error", "", "Simcard hasn't coordinates.", 10000, 'trustedHtml');
      });

    };

    function fillSimCards(sims) {
      var simCards = [];
      angular.forEach(sims, function(value, key) {
        simCards.push(value);
      });
      return simCards;      
    }
}]);
