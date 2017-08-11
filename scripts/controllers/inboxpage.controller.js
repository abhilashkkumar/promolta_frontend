(function(){
  'use strict';
  
  angular
  .module('PromoltaApp')
  .controller('InboxPageController',InboxPageController);

  InboxPageController.$inject = ['$state','Email' ,'$stateParams'];

  function InboxPageController($state, Email, $stateParams){
    var vm = this;
    vm.subject = $stateParams.obj.subject;
    vm.from = $stateParams.obj.from;
    vm.body = $stateParams.obj.body;
    vm.isReply = false;
    vm.isFwd = false;

    vm.replyEmail = function(){
      if(!vm.isReply){
        if($stateParams.obj.body.indexOf("wrote")==-1){
          var prevBody = $stateParams.obj.body;
          vm.body = "\n\t"+$stateParams.obj.created_at+' < '+ $stateParams.obj.from + ' > wrote:\n\t'+prevBody;
        }else{
          Email.indentation($stateParams.obj.id).then(function(data){
            vm.temp = data.msg;
            var prevBody = $stateParams.obj.created_at+' < '+ $stateParams.obj.from + ' > wrote:\n\t' + vm.temp;
            vm.body = "\n\t"+prevBody;
          });
        }
        vm.reviverEmails = vm.from;
        vm.isReply = true;
        vm.isFwd = false;
      }
    }

    vm.composeEmailForm = function(){
      if(isReply){
        Email.sendEmail(vm.reviverEmails, vm.subject, vm.body).then(function(data){
          console.log(data);
        },function(err){
          console.log(err);
        });
      }else{
        if(vm.isFwd){
          Email.sendEmail(vm.reviverEmails, vm.subject, vm.body).then(function(data){
            console.log(data);
          },function(err){
            console.log(err);
          });
        }
      }
      $state.go('inbox');
    }

    vm.forwardEmailForm = function(){
      vm.isFwd = true;
      vm.subject += "FWD";
      vm.body = "<"+vm.from+">"+"to <"+vm.to+">\n\n-------forward--------\n"+vm.body;
      vm.isReply = false;
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