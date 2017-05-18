angular
  .module('app')
  .factory('AuthService',
   ['Customer', '$q', '$rootScope', '$state', 'toaster', function(Customer, $q, $rootScope, $state, toaster) {

    function login(email, password) {
      return Customer
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          toaster.pop("success", "", "Logged in successfully!", 5000, 'trustedHtml');
          role(response.user.id).then(function(resp) {
            $rootScope.currentUser = {
              id: response.user.id,
              tokenId: response.id,
              email: email,
              username: response.user.username,
              role: resp[0].name
            }
          })
        })
        .catch(function(error) {
          toaster.pop("error", "", "Login failed.", 10000, 'trustedHtml');
        });
    }

    function logout() {
      return Customer
       .logout()
       .$promise
       .then(function() {
         toaster.pop("success", "", "Logged out successfully!", 5000, 'trustedHtml');
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return Customer
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    function refresh(accessTokenId) {
      return Customer
        .getCurrent(function(userResource) {
          role(userResource.id).then(function(resp) {
            $rootScope.currentUser = {
              id: userResource.id,
              tokenId: accessTokenId,
              email: userResource.email,
              username: userResource.username,
              role: resp[0].name
            };
          })
        });
    }

    function role(userId) {
      return Customer
       .customerRight({
        id: userId
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register,
      refresh: refresh,
      role: role
    };

  }]);
