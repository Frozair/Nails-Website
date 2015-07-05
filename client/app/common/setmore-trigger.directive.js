(function(){
  'use-strict';

  angular
    .module('app.common')
    .directive('setmoreTrigger', setmoreTrigger);

  /* @ngInject */
  function setmoreTrigger($timeout){
    var directive = {
        link: link,
        restrict: 'A',
    };
    return directive;

    function link(scope, element, attrs){
      element.bind('click', function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);

        $timeout(function(){
          $('#Setmore_button_iframe').click();
          $('#setmore-overlay, #setmore-fancy-box').show();
        }, 600);
      });
    }
  }
})();
