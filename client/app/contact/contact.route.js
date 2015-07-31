(function(){
  angular
    .module('app.contact')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    routerHelper.configureStates(getStates());
  }

  function getStates(){
    return [
      {
        state: 'contact',
        config: {
          url: '/contact',
          templateUrl: 'app/contact/contact.html',
          title: 'Contact'
        }
      }
    ];
  }
})();
