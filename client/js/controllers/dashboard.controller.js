angular
  .module('app')
  .controller('dashboardController', 
   ['$scope', '$rootScope', 'DashService', '$state', 'ngMap', function ($scope, $rootScope, DashService, $state, ngMap) {
    //initially set those objects to null to avoid undefined error
    $scope.comboNames = ["Emil", "Tobias", "Linus"];

    DashService.simcard().then(function(response) {
      $scope.comboNames = response;
    }, function(error) {

    });
}]);
