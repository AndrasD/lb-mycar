angular
  .module('app')
  .controller('dashboardController', 
   ['$scope', '$rootScope', 'DashService', '$state', function ($scope, $rootScope, DashService, $state) {
    //initially set those objects to null to avoid undefined error
    $scope.selectedName = "";
    
    if ($rootScope.currentUser.role == 'admin') {
    DashService.allSimcard()
    .then( function(response) {
      var simCards = [];
      angular.forEach(response, function(value, key) {
          simCards.push(value);
      });
      $scope.simCards = simCards;        
    });
    }
}]);
