(function(){
    'use strict';
    angular
      .module('<%= appname %>')
      .directive('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

    function <%= _.camelize(name) %>(){

    }

})();