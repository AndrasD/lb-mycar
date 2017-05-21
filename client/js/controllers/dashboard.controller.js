angular
  .module('app')
  .controller('dashboardController', 
   ['$scope', '$rootScope', 'DashService', '$state', function ($scope, $rootScope, DashService, $state) {
    //initially set those objects to null to avoid undefined error
    $scope.selectedName = "";
    
    $scope.simCards = DashService.simcard();

}]);
