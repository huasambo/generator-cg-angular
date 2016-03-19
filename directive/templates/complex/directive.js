(function(){
    'use strict';
    angular
      .module('<%= appname %>')
      .directive('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

    function <%= _.camelize(name) %>(){
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {

            },
            link: link,
            templateUrl: '<%= htmlPath %>',
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
    }

})();
