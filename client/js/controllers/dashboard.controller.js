angular
  .module('app')
  .controller('dashboardController', 
   ['$scope', '$rootScope', 'DashService', '$state', 'ngMap', function ($scope, $rootScope, DashService, $state, ngMap) {
    //initially set those objects to null to avoid undefined error
    $scope.comboNames = [];

}]);
