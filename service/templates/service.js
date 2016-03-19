(function(){
    'use strict';
    angular
      .module('<%= appname %>')
      .factory('<%= _.capitalize(name) %>', <%= _.capitalize(name) %>);

    function <%= _.capitalize(name) %>(){
        var service = {

        };
        return service;

    }

})();