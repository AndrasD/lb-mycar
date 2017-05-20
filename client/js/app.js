// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', ['ui.router', 'lbServices', 'ngAnimate', 'toaster', 'ngMap'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.view.html',
        controller: 'dashboardController',
        authenticate: true
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.view.html',
        controller: 'AuthLoginController',
        authenticate: false
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      })
      .state('customer', {
        url: '/customer/:id',
        templateUrl: 'views/customer.view.html',
        controller: 'customerController',
        authenticate: true
      });
    $urlRouterProvider.otherwise('login');
  }])

  .run(['$rootScope', '$state', 'LoopBackAuth', 'AuthService', function($rootScope, $state, LoopBackAuth, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      // redirect to login page if not logged in
    //   if (toState.authenticate && !LoopBackAuth.accessTokenId) {
    //     event.preventDefault(); //prevent current page from loading
      //
    //     // Maintain returnTo state in $rootScope that is used
    //     // by authService.login to redirect to after successful login.
    //     // http://www.jonahnisenson.com/angular-js-ui-router-redirect-after-login-to-requested-url/
    //     $rootScope.returnTo = {
    //       state: toState,
    //       params: toParams
    //     };
      //
    //     $state.go('login');
    //   } else {
    //     $state.go('dashboard');
    //   }
    });

    // Get data from localstorage after pagerefresh
    // and load user data into rootscope.
    if (LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
      AuthService.refresh(LoopBackAuth.accessTokenId);
    }

  }]);
