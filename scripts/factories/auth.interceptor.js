(function() {
'use strict';

  angular
    .module('PromoltaApp')
    .factory('AuthInterceptor',AuthInterceptor);

  AuthInterceptor.$inject = ['$q','$location'];


//Function to check Proper authorization in a session
  function AuthInterceptor($q,$location){
    return{
      request: function(config){
        config.headers = config.headers || {};
        if (localStorage.Authorization) {
          config.headers.Authorization = localStorage.Authorization;
        }
        return config;
      },

      //Function to redirect 401 Responses to the SignIn Section
      responseError: function(response){
        if (response.status === 401) {
          $location.path('/auth/signin');
        }
        return $q.reject(response);
      }
    }
  }

})();
