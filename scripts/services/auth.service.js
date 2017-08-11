(function(){
  'use strict';
  
  angular
  .module('PromoltaApp.services')
  .service('auth', auth);

  auth.$inject = ['$http'];

  function auth($http){

    //Login Function
    this.login = function(user){
      return $http.post('http://localhost:4000/api/v1/login',{email: user.email,password: user.password});
    }

    //Logout Function
    this.logout = function(){
      return $http.delete('http://localhost:4000/api/v1/logout');
    }

    //Function to check Login status
    this.isLoggedIn = function(){
      return (localStorage.getItem('Authorization')) ? true : false;
    }
  }

})();