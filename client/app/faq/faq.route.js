(function(){
  angular
    .module('app.faq')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    routerHelper.configureStates(getStates());
  }

  function getStates(){
    return [
      {
        state: 'faq',
        config: {
          url: '/faq',
          templateUrl: 'app/faq/faq.html',
          title: 'FAQ',
          controller: 'FAQController',
          controllerAs: 'ctrl'
        }
      }
    ];
  }
})();
