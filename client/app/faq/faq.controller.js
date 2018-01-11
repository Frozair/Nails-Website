(function(){
  'use-strict';

  angular
    .module('app.faq')
    .controller('FAQController', FAQController);

  /* @ngInject */
  function FAQController(){  
    var ctrl = this;
    ctrl.tabs = getTabs();

    function getTabs(){
      return [
        {
          label: 'FAQ',
          src: 'app/faq/faq-tab.html'
        },        
        {
          label: 'Client Etiquette',
          src:'app/faq/etiquette-tab.html'
        }
      ];
    }
  }

})();
