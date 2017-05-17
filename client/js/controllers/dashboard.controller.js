angular
  .module('app')
  .controller('dashboardController', ['$scope', '$rootScope', 'DashService', '$location', '$state', function ($scope, $rootScope, DashService, $location, $state) {
    //initially set those objects to null to avoid undefined error
    $scope.comboNames = [];

    if ($rootScope.currentUser != null) {
        DashService.simcard($rootScope.currentUser.id)
        .then(function() {
        });
    } else {
      $state.go('login');
    }    
    
}]);
