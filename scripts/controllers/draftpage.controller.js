(function(){
  'use strict';
  
  angular
  .module('PromoltaApp')
  .controller('DraftPageController',DraftPageController);

  DraftPageController.$inject = ['$state','Email', '$stateParams'];

  function DraftPageController($state, Email, $stateParams){
    var vm = this;
    vm.subject = $stateParams.obj.subject;
    vm.body = $stateParams.obj.body;

    console.log($stateParams);

    vm.composeEmailForm = function(){
   		Email.sendEmail(vm.reviverEmails, vm.subject, vm.body).then(function(data){
   			console.log(data);
   		},function(err){
   			console.log(err);
   		})
   		$state.go('inbox');
   	}

    vm.saveDraft = function(){
   		Email.updateDraft(vm.reviverEmails, vm.subject, vm.body, $stateParams.obj.id)
   		$state.go('draft');
   	}

  }

})();