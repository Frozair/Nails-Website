(function(){
  angular
    .module('app.home')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    routerHelper.configureStates(getStates());
  }

  function getStates(){
    return [
      {
        state: 'home',
        config: {
          url: '/',
          templateUrl: 'app/home/home.html',
          title: 'Home',
          controller: 'HomeController',
          controllerAs: 'ctrl'
        }
      }
    ];
  }
})();
