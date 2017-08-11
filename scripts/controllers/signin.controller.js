(function(){
  'use strict';
  
  angular
  .module('PromoltaApp')
  .controller('SignInController',SignInController);

  SignInController.$inject = ['auth','$state'];

  function SignInController(auth,$state){
    var vm = this;
    vm.signinForm = {};

    //User SignIn via service auth methods.
    vm.submitSignInForm = function(){
      if (vm.signinForm.$valid) {
        var promise = auth.login(vm.user);
        promise.then(success,error);
      }
    };

    //Function to set User authorization credentials in the localStorage
    function success(response){
      localStorage.setItem('Authorization',response.data.auth_token);
      $state.go('inbox');
    }

    function error(response){
      vm.wrongCredentials = true;
      vm.message = response.data.error;
    }

  }

})();