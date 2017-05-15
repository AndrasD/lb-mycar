// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .factory('AuthService', ['Customer', '$q', '$rootScope', '$state', 'toaster', function(User, $q, $rootScope, $state, toaster) {

    function login(email, password) {
      return User
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          toaster.pop("success", "", "Logged in successfully!", 10000, 'trustedHtml');
          role(response.user.id).then(function(res){})
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email,
            username: response.user.username,
            role: res.name
          }
        })
        .catch(function(error) {
          toaster.pop("error", "", "Login failed. " || error.status, 10000, 'trustedHtml');
        });
    }

    function logout() {
      return User
       .logout()
       .$promise
       .then(function() {
         toaster.pop("success", "", "Logged out successfully!", 10000, 'trustedHtml');
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return User
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    function refresh(accessTokenId) {
      return User
        .getCurrent(function(userResource) {
          $rootScope.currentUser = {
            id: userResource.id,
            tokenId: accessTokenId,
            email: userResource.email,
            username: userResource.username
          };
        });
    }

    return {
      login: login,
      logout: logout,
      register: register,
      refresh: refresh
    };

  }]);
