(function(){
  'use strict';
  
  angular
  .module('PromoltaApp')
  .controller('InboxController',InboxController);

  InboxController.$inject = ['$state','Email'];

  function InboxController($state, Email){
    var vm = this;
    Email.getEmail().then(function(data){
      vm.emails = data;
    });

    vm.updateRead = function(email){
      Email.updateRead(email.id).then(function(data){
        vm.emails = data;
      });
      $state.go('indexPage', {obj: email});
    }
  }

})();