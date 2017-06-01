angular
  .module('app')
  .factory('AuthService',
   ['Customer', '$q', '$rootScope', '$state', 'toaster', function(Customer, $q, $rootScope, $state, toaster) {

    function login(email, password) {
      return Customer
        .login({email: email, password: password})
        .$promise;
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
        .getCurrent()
        .$promise
        .then(function(userResource) {
          role(userResource.id).then(function(resp) {
            fillCurrentUser(accessTokenId, userResource, resp);
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

    function fillCurrentUser(token, user, role) {
      return $rootScope.currentUser = {
        id: user.id,
        tokenId: token,
        email: user.email,
        username: user.username,
        role: role[0].name
      };
    }

    return {
      login: login,
      logout: logout,
      register: register,
      refresh: refresh,
      role: role,
      fillCurrentUser: fillCurrentUser
    };

  }]);
