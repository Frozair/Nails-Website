(function(){
  'use-strict';

  angular
    .module('app.common')
    .directive('setmoreTrigger', setmoreTrigger);

  /* @ngInject */
  function setmoreTrigger(){
    var directive = {
        link: link,
        restrict: 'A',
    };
    return directive;

    function link(scope, element, attrs){
      element.bind('click', function(e) {
        var href =
          angular.element(document.getElementById('setmore-href')).attr('href');
        window.location.href = href;
      });
    }
  }
})();
