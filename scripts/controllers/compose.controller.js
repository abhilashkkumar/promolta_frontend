(function(){
  'use strict';
  
  angular
  .module('PromoltaApp')
  .controller('ComposeController',ComposeController);

  ComposeController.$inject = ['$state', 'Email'];

  function ComposeController($state, Email){
    var vm = this;
   	vm.composeEmailForm = function(){
   		Email.sendEmail(vm.reviverEmails, vm.subject, vm.body).then(function(data){
   			console.log(data);
   		},function(err){
   			console.log(err);
   		})
   		$state.go('inbox');
   	}
   	vm.saveDraft = function(){
   		Email.saveDraft(vm.reviverEmails, vm.subject, vm.body).then(function(data){
   			console.log(data);
   		},function(err){
   			console.log(err);
   		})
   		$state.go('inbox');
   	}
  }

})();