(function(){
  'use strict';
  
  angular
  .module('PromoltaApp')
  .controller('DraftController',DraftController);

  DraftController.$inject = ['$state','Email'];

  function DraftController($state, Email){
    var vm = this;
    Email.getDraft().then(function(data){
      vm.emails = data;
    });

    vm.draftPage = function(email){
      $state.go('draftPage', {obj: email});
    }
  }

})();