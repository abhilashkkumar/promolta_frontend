(function() {
'use strict';

    angular
        .module('PromoltaApp')
        .factory('Email', Email);

    Email.$inject = ['$http','$q'];
    
    function Email($http,$q) {

        //Factory Methods 
        var email = {
            sendEmail:sendEmail,
            getEmail:getEmail,
            updateRead:updateRead,
            saveDraft:saveDraft,
            getDraft:getDraft,
            updateDraft:updateDraft,
            indentation: indentation
        };
        
        return email;
        
        function sendEmail(emails, subject, body) {
            var deferred = $q.defer();
            
            $http.post('http://localhost:4000/api/v1/send',{
                emails: emails,
                subject: subject,
                body: body
            })
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response); 
                        });
            return deferred.promise;
         }

         function getEmail() {
            var deferred = $q.defer();
            
            $http.get('http://localhost:4000/api/v1/inbox')
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response); 
                        });
            return deferred.promise;
         }

         function updateRead(emailId){
             var deferred = $q.defer();
            
            $http.post('http://localhost:4000/api/v1/update_read',{
                email_id: emailId
            })
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response); 
                        });
            return deferred.promise;
         }

         function saveDraft(emails, subject, body){
             var deferred = $q.defer();
            
            $http.post('http://localhost:4000/api/v1/save_draft',{
                emails: emails,
                subject: subject,
                body: body
            })
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response); 
                        });
            return deferred.promise;
         }

         function getDraft() {
            var deferred = $q.defer();
            
            $http.get('http://localhost:4000/api/v1/get_draft')
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response); 
                        });
            return deferred.promise;
         }

         function updateDraft(emails, subject, body, id) {
            var deferred = $q.defer();
            
            $http.post('http://localhost:4000/api/v1/update_draft',{
                emails: emails,
                subject: subject,
                body: body,
                email_id: id
            })
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response); 
                        });
            return deferred.promise;
         }

         function indentation(id) {
            var deferred = $q.defer();
            
            $http.post('http://localhost:4000/api/v1/indentation',{
                email_id: id
            })
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response); 
                        });
            return deferred.promise;
         }
    }
})();